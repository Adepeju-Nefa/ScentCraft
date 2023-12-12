module.exports = (req,res)=>{
    if (req.session.userId){
        console.log('User is not logged In')
        return res.render('create')
    }
    res.redirect('auth/login')
    
};