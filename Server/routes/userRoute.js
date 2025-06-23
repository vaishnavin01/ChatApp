// routes/userRoute.js
const express = require('express');
const router = express.Router();

const registerController = require('../controllers/registerController.js');
const loginController = require('../controllers/loginController.js');
const verifyEmail = require('../controllers/emailVerifyController.js');
const profileController = require('../controllers/profileController.js');
const { getMessages } = require("../controllers/messageController.js"); // ✅ correct import
const peopleController = require('../controllers/peopleController.js');

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/:id/verify/:token", verifyEmail);
router.get("/profile", profileController.profileController);
router.get("/messages/:userId", getMessages); // ✅ use named function
router.get("/people", peopleController);
router.put("/profile/update", profileController.profileUpdate);
router.stack.forEach(r => {
    if (r.route) {
        console.log(`Defined route: ${Object.keys(r.route.methods)[0].toUpperCase()} ${r.route.path}`);
    }
});


module.exports = router;
