const User=require('../models/User')
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
class UserController {
    getAllUsers(req,res){
        User.findOne().then(user=>{
            res.json({"user":user})
        })
    }
    register(req,res){
        User.findOne({ email: req.body.email }).then(user => {
            if (user) {
                return res.status(400).json({"email":"Email is already exist"});
            } else {
                const avatar = gravatar.url(req.body.email, {
                    s: '200', // Size
                    r: 'pg', // Rating
                    d: 'mm' // Default
                });

                const newUser = new User({
                    name: req.body.name,
                    email: req.body.email,
                    avatar,
                    password: req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        });
    }

    login(req,res){
        const email=req.body.email;
        const password=req.body.password;

        User.findOne({email})
            .then(user=>{
                if (!user){
                    res.status(404).json({'email':'Emails is not Exist'});
                } else{
                    bcrypt.compare(password,user.password)
                        .then(isMatched=>{
                            if (isMatched){
                                res.status(200).json({"status":"Success"})
                            } else {
                                res.status(400).json({"password":"Password is not correct"})
                            }
                        })
                }
            })

    }

}
module.exports=UserController