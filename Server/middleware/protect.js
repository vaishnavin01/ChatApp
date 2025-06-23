

const jwt = require("jsonwebtoken");

// Async middleware function to verify JWT token from cookies
async function protect(req) {
    return new Promise((resolve, reject) => {
        const token = req.cookies?.authToken; // Get token from cookies

        if (!token) {
            return reject("No token provided");
        }

        jwt.verify(token, process.env.JWTPRIVATEKEY, {}, (err, userData) => {
            if (err) {
                reject("Invalid or expired token");
            } else {
                resolve(userData); // You can also attach this to req.user = userData;
            }
        });
    });
}

module.exports = protect;
