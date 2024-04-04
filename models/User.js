const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new schema({
    username: {
        type: String,
        unique : true,
        required: [true, 'Please provide a username']
    },

    password:{ 
        type: String,
        required: [true, 'Please provie a password']
    }
});
UserSchema.plugin(uniqueValidator);
UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10,(error,hash)=>{
        user.password = hash;
        next()
    })
})
const User = mongoose.model('User', UserSchema); //to access the database

module.exports = User;