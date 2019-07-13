const User = require('../models/User')
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/keys');


// import register validator
const validateRegisterInput=require('../validation/register')

class UserController {

    /**
     * @Route Public /api/users
     * @param req
     * @param res
     * Get all users
     */
    getAllUsers(req, res) {
        console.log("data is here ",req.user);
        res.json({'status':"success",})
    }

    /**
     * @Route Public /api/users/register
     * @param req
     * @param res
     * Register new user and check is email is unique
     */

    register(req, res) {

        const {errors,isValid} =validateRegisterInput(req.body);
        // check validation
        if (!isValid){
            return res.status(400).json(errors)
        }

        User.findOne({email: req.body.email}).then(user => {
            if (user) {
                return res.status(400).json({"email": "Email is already exist"});
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

    /**
     * @Route Public /api/users/login
     * @param req
     * @param res
     * Authenticate the user after verifying their credentials
     */
    login(req, res) {
        const email = req.body.email;
        const password = req.body.password;

        User.findOne({email})
            .then(user => {
                if (!user) {
                    res.status(404).json({'email': 'Emails is not Exist'});
                } else {
                    bcrypt.compare(password, user.password)
                        .then(isMatched => {
                            if (isMatched) {

                                //user is matched
                                const payLoad = {id: user.id, name: user.name, avatar: user.avatar}; //JWT creation payload
                                jwt.sign(
                                    payLoad,
                                    config.secretOrKey,
                                    {expiresIn: 3600},
                                    (err,token) => {
                                        res.status(200).json({
                                            success:true,
                                            token:"Bearer "+token
                                        })
                                    }
                                );
                                //res.status(200).json({"status": "Success"})
                            } else {
                                res.status(400).json({"password": "Password is not correct"})
                            }
                        })
                }
            })

    }

}

module.exports = UserController