
const User = require('../models/User')
const path = require('path')

module.exports = (req, res)=>{
    User.create(req.body)
        .then(()=>{
            res.redirect('/');
        })
        .catch((error)=>{
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            // req.session.validationErrors = validationErrors
            req.flash('validationErrors', validationErrors)
            req.flash('data',req.body)
            // console.log(error)
            return res.redirect('/auth/register')
            
        })
        // res.redirect('/')
   
    }
   


// module.exports = (req, res)=>{
//     User.create(req.body,(error, user)=>{
//         res.redirect('/');
//     })
   
// };       