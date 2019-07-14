const validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateCommentInput(data) {
    let errors = {};

    data.text = !isEmpty(data.text) ? data.text : "";

    if (!validator.isLength(data.text, {min: 10, max: 300})) {
        errors.text = "Post must be between 10 to 300 characters"
    }
    if (validator.isEmpty(data.text)) {
        errors.text = "Text field is required"
    }
    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
};