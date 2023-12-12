
const User = require('../models/User.js')
const path = require('path')

module.exports = (req, res)=>{
    User.create(req.body)
        .then(()=>{
            res.redirect('/');
        })
        .catch((error)=>{
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.session.validationErrors = validationErrors
            // console.log(error)
            return res.redirect('/auth/register')
            
        })
        
   
    }
   


// module.exports = (req, res)=>{
//     User.create(req.body,(error, user)=>{
//         res.redirect('/');
//     })
   
// };       