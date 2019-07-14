const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : "";
    data.company = !isEmpty(data.company) ? data.company : "";
    data.location = !isEmpty(data.location) ? data.location : "";
    data.from = !isEmpty(data.from) ? data.from : "";
    data.to = !isEmpty(data.to) ? data.to : "";
    data.current = !isEmpty(data.current) ? data.current : "";
    data.description = !isEmpty(data.description) ? data.description : "";



    if (validator.isEmpty(data.title)) {
        errors.title = "Title field is required"
    }
    if (validator.isEmpty(data.company)) {
        errors.company = "Company field is required"
    }
    if (validator.isEmpty(data.from)) {
        errors.from = "From field is required"
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};