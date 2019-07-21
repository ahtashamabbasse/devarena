const express = require('express');
const router = express.Router();

const userController = require('../../controller/userController');
const user = new userController();
const passpor = require('passport')


router.get('/current', passpor.authenticate('jwt', {session: false}), user.current);
router.post('/register', user.register);
router.post('/login', user.login);


module.exports = router;
