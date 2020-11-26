const User = require('../model/user');
exports.getpage=(req,res,next)=>{
    res.render('userRegister',{
        
    });
}
exports.postpage = (req, res, next) => {
    req.session.isLoggedin = true;
    res.redirect('/home');
//     User.findById('5fbd48074af63036041a9fe5')
//       .then(user => {
//         req.session.isLoggedIn = true;
//         req.session.user = user;
//         req.session.save(err => {
//           console.log(err);
//           res.redirect('/');
//         });
//       })
//       .catch(err => console.log(err));
   };