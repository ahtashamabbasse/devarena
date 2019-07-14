const Profile = require('../models/Profile');

// import profile validator
const validateProfileInput=require('../validation/profile');


class ProfileController {
    getProfile(req,res){
        let errors={};
        Profile.findOne({user:req.user.id})
            .populate('user',['name','avatar'])
            .then(profile=>{
                if (!profile){
                    errors.noprofile="No Profile Found";
                    res.status(404).json(errors)
                }
                res.status(200).json(profile)
            })
            .catch(err=>{
                res.status(500).json(err)
            })
    }
    updateProfile(req,res){

        const {errors,isValid} =validateProfileInput(req.body);
        // check validation
        if (!isValid){
            return res.status(400).json(errors)
        }

        const profileFields={};
        profileFields.user=req.user.id;
        
        if (req.body.handle) profileFields.handle=req.body.handle;
        if (req.body.company) profileFields.company=req.body.company;
        if (req.body.website) profileFields.website=req.body.website;
        if (req.body.location) profileFields.location=req.body.location;
        if (req.body.bio) profileFields.bio=req.body.bio;
        if (req.body.status) profileFields.status=req.body.status;
        if (req.body.githubusername) profileFields.githubusername=req.body.githubusername;

        //Skills
        if (typeof req.body.skills!=='undefined') {
            profileFields.skills=req.body.skills.split(',');
        }

        // Social profiles
        profileFields.social={};
        if (req.body.facebook) profileFields.social.facebook=req.body.facebook;
        if (req.body.instagram) profileFields.social.instagram=req.body.instagram;
        if (req.body.linkedin) profileFields.social.linkedin =req.body.linkedin;
        if (req.body.twitter) profileFields.social.twitter=req.body.twitter;
        if (req.body.youtube) profileFields.social.youtube=req.body.youtube;

        Profile.findOne({user:req.user.id})
            .then(profile=>{
                if (profile){
                    //update the profile

                    Profile.findOneAndUpdate(
                        {user:req.user.id},
                        {$set:profileFields},
                        {new:true}
                        )
                        .then(profile=>res.status(200).json(profile))
                }else {
                    Profile.findOne({handle:req.body.handle})
                        .then(profile=>{
                            if (profile){
                                error.handle="Handle is already exist";
                                res.status(400).json(error)
                            }
                            new Profile(profileFields)
                                .save()
                                .then(profile=>res.status(200).json(profile))
                        })

                }
            })
        
    }


}
module.exports=ProfileController;