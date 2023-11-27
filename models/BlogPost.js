const mongoose = require('mongoose');
const schema = mongoose.Schema;

const blogPostSchema = new schema({
    title: String,
    body: String,
    username: String,
    datePosted: {
        type: Date,
        default: new Date()
    }
});
const BlogPost = mongoose.model('BlogPost', blogPostSchema); //to access the database

module.exports = BlogPost;