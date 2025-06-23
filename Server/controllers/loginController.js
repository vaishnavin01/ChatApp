const bcrypt = require("bcrypt");
const { User, validateLogin } = require("../models/usermodel.js");

const loginController = async (req, res) => {
    try {
        // Validate input
        const { error } = validateLogin(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        // Find the user by email
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).send({ message: "Invalid Email" });
        }

        // Check password validity
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).send({ message: "Invalid Password" });
        }

        // Check if the user's email is verified
        if (!user.verified) {
            return res.status(400).send({ message: "Please verify your email first." });
        }

        // Generate authentication token and set cookie
        const token = user.generateAuthToken(); // Assumes method exists in User schema

        res
            .status(200)
            .cookie("authToken", token, {
                httpOnly: false, // If security is a concern, set this to true
                sameSite: "none",
                secure: true,
                expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            })
            .send({ message: "Login successful", status: 200 });

    } catch (error) {
        console.error("Error in loginController:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

module.exports = loginController;
