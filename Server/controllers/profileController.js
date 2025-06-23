const jwt = require("jsonwebtoken");
const { User } = require("../models/usermodel.js");

// ✅ GET Profile Controller
const profileController = async (req, res) => {
    const token = req.cookies?.authToken;

    if (!token) {
        return res.status(401).json("No token provided");
    }

    jwt.verify(token, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
        if (err) {
            return res.status(401).json("Invalid or expired token");
        }

        try {
            const user = await User.findById(userData._id);
            res.status(200).json(user);
        } catch (error) {
            console.error("Error fetching user profile:", error);
            res.status(500).json("Internal Server Error");
        }
    });
};

// ✅ PUT Profile Update Controller
const profileUpdate = async (req, res) => {
    const token = req.cookies?.authToken;

    if (!token) {
        return res.status(401).json("No token provided");
    }

    jwt.verify(token, process.env.JWTPRIVATEKEY, {}, async (err, userData) => {
        if (err) {
            return res.status(401).json("Invalid or expired token");
        }

        try {
            const { firstName, lastName, email, avatarLink } = req.body;
            const user = await User.findById(userData._id);

            if (!user) {
                return res.status(404).json("User not found");
            }

            user.firstName = firstName;
            user.lastName = lastName;
            user.email = email;
            user.avatarLink = avatarLink;

            await user.save();

            res.status(200).json({ message: "Profile updated successfully", user });
        } catch (error) {
            console.error("Error updating profile:", error);
            res.status(500).json("Internal Server Error");
        }
    });
};

module.exports = { profileController, profileUpdate };
