const express = require('express');
const router = new express.Router();

const userController = require('./userController');

router.post('/', userController.saveUserData);
router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;