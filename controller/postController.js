const Post = require('../models/Post');

const validatePostInput = require('../validation/Post');


class PostController {

    /**
     * @route Public /api/posts
     * @method GET
     * @param req
     * @param res
     * @description Get all post
     */
    getAllPosts(req, res) {
        Post.find()
            .sort({date: -1})
            .then(posts => res.status(200).json(posts))
            .catch(err => res.status(404).json({nopost: "No Posts found"}))
    }

    /**
     * @route Public /api/posts/:id
     * @method GET
     * @param req
     * @param res
     * @description Get post by id
     */
    getPostById(req, res) {
        Post.findById(req.params.id)
            .then(posts => res.status(200).json(posts))
            .catch(err => res.status(404).json({nopost: "No post found with this id"}))
    }

    /**
     * @route private /api/posts
     * @method POST
     * @param req
     * @param res
     * @description Create new post
     */
    savePost(req, res) {

        const {errors, isValid} = validatePostInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newPost = new Post({
            text: req.body.text,
            name: req.user.name,
            avatar: req.user.avatar,
            user: req.user.id,
        });
        newPost.save()
            .then(post => {
                return res.status(200).json(post)
            })
            .catch(err => res.status(500).json(err))
    }

    /**
     * @route Public /api/posts/:id
     * @method DELETE
     * @param req
     * @param res
     * @description Delete post if the requested user is owner
     */
    deletePost(req, res) {
        Post.findById(req.params.id)
            .then(post => {
                if (post.user.toString() !== req.user.id) {
                    return res.status(401).json({'notauthorized': "User is not Authorized"})
                }
                post.remove().then(() => res.json({'status': "success"}))
            })
            .catch(err => res.status(404).json({nopost: "No post found with this id"}))
    }

    /**
     * @route Public /api/posts/likes/:id
     * @method POST
     * @param req
     * @param res
     * @description User can like post if haven't like yet
     */
    saveLike(req, res) {
        Post.findById(req.params.id)
            .then(post => {
                if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
                    return res.status(400).json({'alreadyLiked': "This post has been already liked"})
                }
                post.likes.unshift({user: req.user.id});
                post.save()
                    .then(post => res.json(post))
            })
            .catch(err => res.status(404).json({nopost: "No post found"}))
    }

    /**
     * @route Public /api/posts/unlikes/:id
     * @method POST
     * @param req
     * @param res
     * @description User can unlike post if already liked
     */
    saveunLike(req, res) {
        Post.findById(req.params.id)
            .then(post => {
                const isLiked = post.likes.filter(like => like.user.toString() === req.user.id).length === 0;
                if (isLiked) {
                    return res.status(400).json({'noliked': "You have not liked yet"})
                }

                const removeIndex = post.likes
                    .map(item => item.user.toString())
                    .indexOf(req.user.id);

                post.likes.splice(removeIndex, 1);
                post.save()
                    .then(post => res.json(post))
            })
            .catch(err => res.status(404).json({nopost: "No post found"}))
    }

    /**
     * @route Public /api/posts/comment/:id
     * @method POST
     * @param req
     * @param res
     * @description User can unlike post if already liked
     */
    saveComment(req, res) {
        Post.findById(req.params.post_id)
            .then(post => {
                const newComment = {
                    text: req.body.text,
                    name: req.user.name,
                    avatar: req.user.avatar,
                    user: req.user.id,
                };
                post.comments.unshift(newComment);
                post.save()
                    .then(post => res.json(post))
            })
            .catch(err => res.status(404).json({nopost: "No post found"}))
    }


}

module.exports = PostController;