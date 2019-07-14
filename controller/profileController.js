const Profile = require('../models/Profile');

// import profile validator
const validateProfileInput = require('../validation/profile');
const validateExperienceInput = require('../validation/experience');
const validateEducationInput = require('../validation/education');




class ProfileController {
    /**
     * @route private /api/profile
     * @method GET
     * @param req
     * @param res
     * @description Get logged in user profile
     */
    getProfile(req, res) {
        let errors = {};
        Profile.findOne({user: req.user.id})
            .populate('user', ['name', 'avatar'])
            .then(profile => {
                if (!profile) {
                    errors.noprofile = "No Profile Found";
                    res.status(404).json(errors)
                }
                res.status(200).json(profile)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    /**
     * @route /api/profile
     * @method POST
     * @param req
     * @param res
     * @access private
     * @description Update or create profile after validating
     */

    updateProfile(req, res) {

        const {errors, isValid} = validateProfileInput(req.body);
        // check validation
        if (!isValid) {
            return res.status(400).json(errors)
        }

        const profileFields = {};
        profileFields.user = req.user.id;

        if (req.body.handle) profileFields.handle = req.body.handle;
        if (req.body.company) profileFields.company = req.body.company;
        if (req.body.website) profileFields.website = req.body.website;
        if (req.body.location) profileFields.location = req.body.location;
        if (req.body.bio) profileFields.bio = req.body.bio;
        if (req.body.status) profileFields.status = req.body.status;
        if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;

        //Skills
        if (typeof req.body.skills !== 'undefined') {
            profileFields.skills = req.body.skills.split(',');
        }

        // Social profiles
        profileFields.social = {};
        if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
        if (req.body.instagram) profileFields.social.instagram = req.body.instagram;
        if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
        if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
        if (req.body.youtube) profileFields.social.youtube = req.body.youtube;

        Profile.findOne({user: req.user.id})
            .then(profile => {
                if (profile) {
                    //update the profile

                    Profile.findOneAndUpdate(
                        {user: req.user.id},
                        {$set: profileFields},
                        {new: true}
                    )
                        .then(profile => res.status(200).json(profile))
                } else {
                    Profile.findOne({handle: req.body.handle})
                        .then(profile => {
                            if (profile) {
                                error.handle = "Handle is already exist";
                                res.status(400).json(error)
                            }
                            new Profile(profileFields)
                                .save()
                                .then(profile => res.status(200).json(profile))
                        })

                }
            })

    }

    /**
     * @route /api/profile/handle/:handle
     * @method GET
     * @param req
     * @param res
     * @access public
     * @description Get profile through handle
     */
    getProfileByHandle(req, res) {
        let error = {}
        Profile.findOne({handle: req.params.handle})
            .populate('user', ['name', 'avatar'])
            .then(profile => {
                if (!profile) {
                    error.noprofile = "There is no profile for this user";
                    return res.status(400).json(error)
                }
                return res.status(200).json(profile)
            })
            .catch(err => res.status(400).json(err))
    }

    /**
     * @route /api/profile/user/:id
     * @method GET
     * @param req
     * @param res
     * @access public
     * @description Get profile through user id
     */
    getProfileById(req, res) {
        let error = {};
        Profile.findOne({user: req.params.id})
            .populate('user', ['name', 'avatar'])
            .then(profile => {
                if (!profile) {
                    error.noprofile = "There is no profile for this user";
                    return res.status(400).json(error)
                }
                return res.status(200).json(profile)
            })
            .catch(err => res.status(400).json(err))
    }

    /**
     * @route /api/profile/all
     * @method GET
     * @param req
     * @param res
     * @access public
     * @description Get all profiles
     */
    getallProfiles(req, res) {
        let error = {};
        Profile.find()
            .populate('user', ['name', 'avatar'])
            .then(profile => {
                if (!profile) {
                    error.noprofile = "There are no profiles";
                    return res.status(400).json(error)
                }
                return res.status(200).json(profile)
            })
            .catch(err => res.status(400).json(err))
    }

    /**
     * @route /api/profile/experience
     * @method POST
     * @param req
     * @param res
     * @access private
     * @description Save user experience
     */
    experience(req, res) {

        const {errors, isValid} = validateExperienceInput(req.body);
        // check validation
        if (!isValid) {
            return res.status(400).json(errors)
        }

        Profile.findOne({user: req.user.id})
            .then(profile => {
                const newExp = {
                    title: req.body.title,
                    company: req.body.company,
                    location: req.body.location,
                    from: req.body.from,
                    to: req.body.to,
                    current: req.body.current,
                    description: req.body.description,
                };
                profile.experience.unshift(newExp);
                profile.save()
                    .then(profile=>res.status(200).json(profile))

            })
            .catch(err => res.status(400).json(err))
    }

    /**
     * @route /api/profile/education
     * @method POST
     * @param req
     * @param res
     * @access private
     * @description Save user experience
     */
    education(req, res) {

        const {errors, isValid} = validateEducationInput(req.body);
        // check validation
        if (!isValid) {
            return res.status(400).json(errors)
        }
        Profile.findOne({user: req.user.id})
            .then(profile => {
                const newEdu = {
                    institute: req.body.institute,
                    degree: req.body.degree,
                    fieldOfStudy: req.body.fieldOfStudy,
                    from: req.body.from,
                    to: req.body.to,
                    current: req.body.current,
                    description: req.body.description,
                };
                profile.education.unshift(newEdu);
                profile.save()
                    .then(profile=>res.status(200).json(profile))
            })
            .catch(err => res.status(400).json(err))
    }

    /**
     * @route /api/profile/experience/:exp_id
     * @method Delete
     * @param req
     * @param res
     * @access private
     * @description Delete developer experience
     */
    deleteExperience(req, res) {
        Profile.findOne({user: req.user.id})
            .then(profile => {

                const removeIndex=profile.experience
                    .map(item=>item._id)
                    .indexOf(req.params.exp_id);
                console.log(removeIndex);

                profile.experience.splice(removeIndex,1);

                console.log(profile.experience.length);

                profile.save()
                    .then(profile=>res.status(200).json(profile))
            })
            .catch(err => res.status(400).json(err))
    }

    /**
     * @route /api/profile/education/:edu_ip
     * @method Delete
     * @param req
     * @param res
     * @access private
     * @description Delete developer education
     */
    deleteEducation(req, res) {
        Profile.findOne({user: req.user.id})
            .then(profile => {

                const removeIndex=profile.education
                    .map(item=>item._id)
                    .indexOf(req.params.edu_id);
                console.log(removeIndex);
                profile.education.splice(removeIndex,1);
                profile.save()
                    .then(profile=>res.status(200).json(profile))
            })
            .catch(err => res.status(400).json(err))
    }


}

module.exports = ProfileController;