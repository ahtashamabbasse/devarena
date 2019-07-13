const express = require('express');
const router = express.Router();

const userController = require('../../controller/userController');
const user=new userController();



router.post('/register', user.register);
router.post('/login', user.login);


module.exports = router;
