
const express = require('express');
const avatarController = require('../controllers/avatarController.js');
const router = express.Router();
router.post("/add", avatarController.avatarController);
router.get("/all", avatarController.getAllAvatars);
module.exports = router;