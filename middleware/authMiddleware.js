const User = require('../models/User')
module.exports = (req,res, next)=>{
    console.log(req.session.userId)
    User.findById(req.session.userId)
        .then((user)=>{
            if (!user){
                console.log('user not found')
                return res.redirect('/');
            } 
            next();
            console.log('user was found without error - authMiddleWare')

        })
       
        .catch((error)=>{
           console.log('error retrieving user - authMiddleWare')
           return res.redirect('/');
           
        })
}