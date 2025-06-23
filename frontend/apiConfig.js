let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
    // When deployed online (e.g., Render, Railway)
    baseUrl = "https://your-backend-domain.com"; // 🔁 Replace this when you deploy
    socketUrl = "wss://your-backend-domain.com"; // 🔁 Replace this when you deploy
} else {
    // Local development
    baseUrl = "http://localhost:4000";
    socketUrl = "ws://localhost:4000";
}

export { baseUrl, socketUrl };
