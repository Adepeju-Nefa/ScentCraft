const bcrypt = require('bcrypt');
const User = require('../models/User')

// module.exports = (req,res)=>{
//     const {username, password} = req.body;
//     User.findOne({username:username}, (error, user)=>{
//         if (user){
//             bcrypt.compare(password, user.password,(error,same)=>{
//                 if(same){
//                     res.redirect('/');
//                 }else{
//                     res.redirect('/auth/login')
//                 }
                
//             })
//         } else{
//             res.redirect('auth/login')
//         }
//     })
// }

module.exports = (req,res)=>{
    const {username, password} = req.body;
    User.findOne({username:username})
        .then((user)=>{
            if (user){
                bcrypt.compare(password,user.password, (error,same)=>{
                    if(same){
                        req.session.userId = user._id;
                        res.redirect('/');
                        console.log("user logged in sucessfully - loginUser controller")
                        // console.log(`session_userID on loginUser.js ${req.session.userId}`);
                    } else{
                        console.log("the user does not exist")
                        res.redirect('/auth/login')
                    }
                })
            }
        })
        .catch((error)=>{
            console.log("some other error occured in log in")
            res.redirect('/auth/login')
        })
}
    
       