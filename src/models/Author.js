const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    birth_date: {
        type: String
    },
    posts: {
        type: [Schema.Types.ObjectId],
        ref: 'posts'
    },
    gender: {
        type: String,
        enum: ['M','F', 'O']
    },
    profile_pic: {
        type: String
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('authors', AuthorSchema);