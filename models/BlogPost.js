const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogPostSchema = new schema({
    title: String,
    body: String,
    // username: String,
    userid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date()
    },
    image: String
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema); //to access the database

module.exports = BlogPost;