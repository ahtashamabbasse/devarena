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
    getAllPosts(req,res){
        Post.find()
            .sort({date:-1})
            .then(posts=>res.status(200).json(posts))
            .catch(err=>res.status(500).json(err))
    }

    /**
     * @route private /api/posts
     * @method POST
     * @param req
     * @param res
     * @description Create new post
     */
    savePost(req,res){

        const {errors,isValid}=validatePostInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const newPost=new Post({
            text:req.body.text,
            name:req.user.name,
            avatar:req.user.avatar,
            user:req.user.id,
        });
        newPost.save()
            .then(post=>{
                return res.status(200).json(post)
            })
            .catch(err=>res.status(500).json(err))
    }


}
module.exports=PostController;