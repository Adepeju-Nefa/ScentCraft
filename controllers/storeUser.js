
const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res)=>{
    User.create(req.body)
        .then(()=>{
            res.redirect('/');
        })
        .catch((error)=>{
            console.log(error)
            return res.redirect('/auth/register')
            
        })
        
   
    }
   


// module.exports = (req, res)=>{
//     User.create(req.body,(error, user)=>{
//         res.redirect('/');
//     })
   
// };       