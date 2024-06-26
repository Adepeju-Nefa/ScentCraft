const BlogPost = require('../models/BlogPost')
const path = require('path')

module.exports = (req, res)=>{
    req.flash('data',req.body)
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'..','public/img', image.name), async (error)=>{
        await BlogPost.create({
            ...req.body, 
            image:'/img/'+image.name,
            userid: req.session.userId
        })
       
        res.redirect('/');
       })
}