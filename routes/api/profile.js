const express = require('express');
const router = express.Router();


const profileController = require('../../controller/profileController');
const profile=new profileController();


router.get('/', profile.getAllProfiles);

module.exports = router;
