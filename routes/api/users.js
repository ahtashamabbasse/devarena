const express = require('express');
const router = express.Router();

const userController = require('../../controller/userController');
const user=new userController();



router.post('/register', user.register);

module.exports = router;
