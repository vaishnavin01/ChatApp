const ws = require("ws");
const jwt = require("jsonwebtoken");
const Message = require("./models/messagemodel");
const { User } = require("./models/usermodel");

const createWebSocketServer = (server) => {
    const wss = new ws.WebSocketServer({ server });

    const notifyAboutOnlinePeople = async () => {
        const onlineUsers = await Promise.all(
            Array.from(wss.clients)
                .filter((client) => client.userId)
                .map(async (client) => {
                    const user = await User.findById(client.userId);
                    return {
                        userId: client.userId,
                        username: client.username,
                        avatarLink: user ? user.avatarLink : null,
                    };
                })
        );

        // Broadcast to all connected clients
        wss.clients.forEach((client) => {
            client.send(
                JSON.stringify({
                    online: onlineUsers,
                })
            );
        });
    };

    wss.on("connection", (connection, req) => {
        // Attach heartbeat/ping mechanism
        connection.isAlive = true;
        connection.timer = setInterval(() => {
            connection.ping();

            // If pong not received in 1s, close connection
            connection.deathTimer = setTimeout(() => {
                connection.isAlive = false;
                clearInterval(connection.timer);
                connection.terminate();
                notifyAboutOnlinePeople(); // ✅ Now safe to call
                console.log("Dead connection terminated");
            }, 1000);
        }, 5000);

        connection.on("pong", () => {
            clearTimeout(connection.deathTimer);
        });

        // Authentication via cookie
        const cookies = req.headers.cookie;
        if (cookies) {
            const tokenString = cookies
                .split(";")
                .find((str) => str.trim().startsWith("authToken="));

            if (tokenString) {
                const token = tokenString.split("=")[1];
                jwt.verify(token, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
                    if (err) {
                        console.error("JWT verification error:", err);
                        return;
                    }

                    const { _id, firstName, lastName } = userData;
                    connection.userId = _id;
                    connection.username = `${firstName} ${lastName}`;

                    // Notify all users about updated online list
                    await notifyAboutOnlinePeople();
                });
            }
        }

        // Handle incoming message
        connection.on("message", async (message) => {
            const messageData = JSON.parse(message.toString());
            const { recipient, text } = messageData;

            if (recipient && text && connection.userId) {
                // Save to MongoDB
                const msgDoc = await Message.create({
                    sender: connection.userId,
                    recipient,
                    text,
                });

                // Send to the recipient if online
                wss.clients.forEach((client) => {
                    if (client.userId === recipient) {
                        client.send(
                            JSON.stringify({
                                sender: connection.username,
                                text,
                                id: msgDoc._id,
                            })
                        );
                    }
                });
            }
        });

        console.log("New WebSocket connection");
    });
};

module.exports = createWebSocketServer;
