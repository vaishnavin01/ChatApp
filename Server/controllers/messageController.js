// controllers/messageController.js
const protect = require("../middleware/protect");
const Message = require("../models/messagemodel");

const getMessages = async (req, res) => {
    try {
        const { userId } = req.params;
        const userData = await protect(req);
        const ourUserId = userData._id;

        const messages = await Message.find({
            sender: { $in: [userId, ourUserId] },
            recipient: { $in: [userId, ourUserId] },
        }).sort({ createdAt: 1 });

        res.json(messages);
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { getMessages };
