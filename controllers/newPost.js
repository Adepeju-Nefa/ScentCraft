module.exports = (req,res)=>{
    if (req.session.userId){
        // console.log('User is not logged In')
        return res.render('create',{
            createPost: true
        });
    }
    res.redirect('auth/login')
    
};