const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    text: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    avatar: {
        type: String,
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users"
            },
        }
    ],
    comments: {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
        text: {
            type: String,
            required: true
        },
        name: {
            type: String,
        },
        avatar: {
            type: String,
        },
        data: {
            type: String,
            default: Date.now()
        },

    },
    data: {
        type: String,
        default: Date.now()
    },


});

module.exports = Post = mongoose.model('posts', PostSchema);
