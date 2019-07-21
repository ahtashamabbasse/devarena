const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProfileSchema = new Schema({
    user: {
        type: Schema.Types.Object,
        ref: "users"
    },
    handle: {
        type: String,
        required: true,
        max: 40
    },
    company: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    status: {
        type: String,
        require: true
    },
    skills: {
        type: [String],
        require: true
    },
    bio: {
        type: String
    },
    githubusername: {
        type: String
    },
    experience: [
        {
            title: {
                type: String,
                require: true
            },
            company: {
                type: String,
                require: true
            },
            location: {
                type: String,
                require: true
            },
            from: {
                type: Date,
                require: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String,
            },
        }
    ],
    education: [
        {
            institute: {
                type: String,
                require: true
            },
            degree: {
                type: String,
                require: true
            },
            fieldOfStudy: {
                type: String,
                require: true
            },
            from: {
                type: Date,
                require: true
            },
            to: {
                type: Date,
            },
            current: {
                type: Boolean,
                default: false
            },
            description: {
                type: String,
            },
        }
    ],
    social: {
        youtube: {
            type: String
        },
        facebook: {
            type: String
        },
        instagram: {
            type: String
        },
        twitter: {
            type: String
        },
        linkedin: {
            type: String
        },

    },
    date: {
        type: Date,
        default: Date.now()
    }


});

module.exports = Profile = mongoose.model('profiles', ProfileSchema);
