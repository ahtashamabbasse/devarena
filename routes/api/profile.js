const express = require('express');
const router = express.Router();

const passport = require('passport');

const profileController = require('../../controller/profileController');
const profile=new profileController();


router.get('/',passport.authenticate('jwt', {session: false}), profile.getProfile);
router.post('/',passport.authenticate('jwt', {session: false}), profile.updateProfile);
router.get('/handle/:handle', profile.getProfileByHandle);
router.get('/user/:id', profile.getProfileById);
router.get('/all', profile.getallProfiles);





module.exports = router;
