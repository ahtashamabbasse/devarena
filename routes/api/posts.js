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
router.post('/unlikes/:id',passport.authenticate('jwt', {session: false}), post.saveunLike);

// Comments
router.post('/comment/:post_id',passport.authenticate('jwt', {session: false}), post.saveComment);
router.delete('/comment/:post_id/:comment_id',passport.authenticate('jwt', {session: false}), post.deleteComment);


module.exports = router;
