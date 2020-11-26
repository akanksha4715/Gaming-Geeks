exports.showhome=(req,res,next)=>{
    res.render('pubg',{
       // isAuthenticated: req.session.isLoggedIn,
        path : '/home'
    });
};