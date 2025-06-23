const bcrypt = require("bcrypt");
const { User, validateRegister } = require("../models/usermodel.js");
const { Token } = require("../models/tokenmodel.js");
const sendEmail = require("../utils/sendEmail.js");
const crypto = require("crypto");

const registerController = async (req, res) => {
    try {
        // Validate user input
        const { error } = validateRegister(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }

        // Check if user already exists and is verified
        let user = await User.findOne({ email: req.body.email });
        if (user && user.verified) {
            return res
                .status(409)
                .send({ message: "User with given email already exists" });
        }

        // If user exists but not verified and a link was already sent
        if (user && user.verificationLinkSent) {
            return res.status(400).send({
                message: "A verification link has already been sent to your email",
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Save new user or update existing unverified user
        if (!user) {
            user = new User({
                ...req.body,
                password: hashPassword,
            });
        } else {
            user.password = hashPassword;
        }

        await user.save();

        // Create token for email verification
        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(16).toString("hex"),
            createdAt: Date.now(),
            expiresAt: Date.now() + 3600000, // 1 hour
        }).save();

        // Send verification email
        // const url = `${process.env.BASE_URL}/api/user/${user._id}/verify/${token.token}`;
        const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);

        // Mark that a verification link has been sent
        user.verificationLinkSent = true;
        await user.save();

        res
            .status(201)
            .send({ message: `Verification email sent to ${user.email}` });

    } catch (error) {
        console.error("Error in registerController:", error);
        res.status(500).send({ message: "Internal Server Error" });
    }
};

module.exports = registerController;
