const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    console.log(data.name);

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.cpassword = !isEmpty(data.cpassword) ? data.cpassword : "";


    if (!validator.isLength(data.name, {min: 2, max: 30})) {
        errors.name = "Name must be between 2 and 30 character"
    }
    if (!validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password Must be at least 6"
    }
    if (validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }
    if (!validator.isEmail(data.email)) {
        errors.name = "Email is not valid"
    }
    if (validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password field is required"
    }
    if (validator.isEmpty(data.cpassword)) {
        errors.password = "Confirm Password field is required"
    }
    if (!validator.equals(data.password, data.cpassword)) {
        errors.password = "Password should be matched"
    }


    return {
        errors: errors,
        isValid: isEmpty(errors)
    }

};