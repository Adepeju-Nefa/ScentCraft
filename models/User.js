const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new schema({
    username: {
        type: String,
        required : true,
        unique: true
    },

    password:{ 
        type: String,
        required: true
    }
});

UserSchema.pre('save', function(next){
    const user = this;
    bcrypt.hash(user.password, 10,(error,hash)=>{
        user.password = hash;
        next()
    })
})
const User = mongoose.model('User', UserSchema); //to access the database

module.exports = User;