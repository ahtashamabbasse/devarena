const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    data.handle = !isEmpty(data.handle) ? data.handle : "";
    data.status = !isEmpty(data.status) ? data.status : "";
    data.skills = !isEmpty(data.skills) ? data.skills : "";
    data.website = !isEmpty(data.website) ? data.website : "";
    data.bio = !isEmpty(data.bio) ? data.bio : "";

    //Social
    data.youtube = !isEmpty(data.youtube) ? data.youtube : "";
    data.facebook = !isEmpty(data.facebook) ? data.facebook : "";
    data.twitter = !isEmpty(data.twitter) ? data.twitter : "";
    data.linkedin = !isEmpty(data.linkedin) ? data.linkedin : "";
    data.instagram = !isEmpty(data.instagram) ? data.instagram : "";




    if (!validator.isLength(data.handle, {min: 2, max: 40})) {
        errors.handle = "Handle must be between 2 and 40"
    }
    if (validator.isEmpty(data.status)) {
        errors.status = "Status field is required"
    }
    if (validator.isEmpty(data.skills)) {
        errors.skills = "Skills field is required"
    }
    if (!isEmpty(data.website)) {
        if (!validator.isURL(data.website)) {
            errors.website = "Website URL is not valid"
        }
    }
    if (!isEmpty(data.facebook)) {
        if (!validator.isURL(data.facebook)) {
            errors.facebook = "Facebook URL is not valid"
        }
    }
    if (!isEmpty(data.instagram)) {
        if (!validator.isURL(data.instagram)) {
            errors.instagram = "Instagram URL is not valid"
        }
    }
    if (!isEmpty(data.linkedin)) {
        if (!validator.isURL(data.linkedin)) {
            errors.linkedin = "Linkedin URL is not valid"
        }
    }
    if (!isEmpty(data.twitter)) {
        if (!validator.isURL(data.twitter)) {
            errors.twitter = "Twitter URL is not valid"
        }
    }
    if (!isEmpty(data.youtube)) {
        if (!validator.isURL(data.youtube)) {
            errors.youtube = "Youtube URL is not valid"
        }
    }


    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};