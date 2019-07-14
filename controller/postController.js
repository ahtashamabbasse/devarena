const Post = require('../models/Post');
const User = require('../models/User');




class PostController {

    getAllPosts(req,res){
        res.json({"status":"Data coming from post controller"})
    }

    /**
     * @route private /api/posts
     * @method POST
     * @param req
     * @param res
     * @description Create new post
     */
    savePost(req,res){

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