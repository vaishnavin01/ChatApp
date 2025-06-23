const Avatar = require("../models/avatars");

// ✅ Add new avatar link
async function avatarController(req, res) {
    const { link } = req.body;

    // Check if the link is provided
    if (!link) {
        return res.status(400).json({ error: "Link is required" });
    }

    try {
        // Create a new avatar entry in the database
        const newAvatar = new Avatar({ link });
        await newAvatar.save();

        // Return success response
        return res
            .status(201)
            .json({ success: true, message: "Avatar link added successfully" });
    } catch (error) {
        console.error("Error adding avatar:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

// ✅ Get all avatar links
async function getAllAvatars(req, res) {
    try {
        // Fetch all avatars from the database
        const avatars = await Avatar.find();

        // Return the list of avatars
        return res.status(200).json({ success: true, avatars });
    } catch (error) {
        console.error("Error fetching avatars:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

module.exports = { avatarController, getAllAvatars };
