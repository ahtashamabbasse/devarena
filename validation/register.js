const validator = require('validator')

module.exports = function validateRegisterInput(data) {
    let errors = {};
    console.log(data.name);
    if (!validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = "Name must be between 2 and 30 character"
    }

    return {
        errors: errors,
        isValid: Object.keys(errors).length>0 ? false : true
    }

};