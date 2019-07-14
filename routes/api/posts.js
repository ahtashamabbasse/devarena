const express = require('express');
const router = express.Router();

const passport = require('passport');

const postController = require('../../controller/postController');
const post=new postController();


router.get('/', post.getAllPosts);
router.post('/',passport.authenticate('jwt', {session: false}), post.savePost);
router.delete('/:id',passport.authenticate('jwt', {session: false}), post.deletePost);
router.get('/:id', post.getPostById);

// Likes
router.post('/likes/:id',passport.authenticate('jwt', {session: false}), post.saveLike);

module.exports = router;
