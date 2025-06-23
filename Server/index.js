require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const cookieParser = require("cookie-parser");

const connection = require("./db/db.js");
const userRoute = require("./routes/userRoute.js");
const avatarRoute = require("./routes/avatarRoute.js");
const createWebSocketServer = require("./wsServer.js");

// Connect to DB
connection();

// Middleware
app.use(express.json());
app.use(cookieParser());

// CORS Setup
const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:4000",
    "https://swifty-chatty-appy.onrender.com"
];

app.use(cors({
    origin: allowedOrigins,
    credentials: true
}));

// Routes
console.log("Mounting avatarRoute at /api/avatar");
app.use("/api/user", userRoute);       // ✅ Valid
app.use("/api/avatar", avatarRoute);   // ✅ Valid

// Frontend serving (if using Vite/React build)
// Serve static frontend files
app.use(express.static(path.join(__dirname, "..", "frontend", "dist")));

// This will catch all non-API routes and forward to index.html
app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});


const listEndpoints = require("express-list-endpoints");
console.log("✅ Defined Routes:", listEndpoints(app));

// Start Server
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// WebSocket
createWebSocketServer(server);
