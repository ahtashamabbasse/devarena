const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateExperienceInput(data) {
    let errors = {};

    data.institute = !isEmpty(data.institute) ? data.institute : "";
    data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";
    data.degree = !isEmpty(data.degree) ? data.degree: "";
    data.from = !isEmpty(data.from) ? data.from : "";
    data.to = !isEmpty(data.to) ? data.to : "";
    data.current = !isEmpty(data.current) ? data.current : "";
    data.description = !isEmpty(data.description) ? data.description : "";



    if (validator.isEmpty(data.institute)) {
        errors.institute = "institute field is required"
    }
    if (validator.isEmpty(data.fieldOfStudy)) {
        errors.fieldOfStudy = "Field Of Study field is required"
    }
    if (validator.isEmpty(data.degree)) {
        errors.degree = "Degree field is required"
    }
    if (validator.isEmpty(data.from)) {
        errors.from = "From field is required"
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};