const express = require('express');
const router = express.Router();

const passport = require('passport');

const postController = require('../../controller/postController');
const post=new postController();


router.get('/', post.getAllPosts);
router.post('/',passport.authenticate('jwt', {session: false}), post.savePost);
router.get('/:id', post.getPostById);


module.exports = router;
