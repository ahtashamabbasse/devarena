const express = require('express');
const router = express.Router();


const postController = require('../../controller/postController');
const post=new postController();


router.get('/', post.getAllPosts);

module.exports = router;
