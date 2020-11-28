const User = require('../model/user');
const bcrypt = require('bcryptjs');


exports.getpage=(req,res,next)=>{
    res.render('userRegister',{
        errormsg : req.flash('error'),
    });
}


   exports.postpage = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.pass;
    const phno = req.body.phno;
  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return bcrypt
        .hash(password, 12)
        .then(hashedPassword => {
          const user = new User({
            email: email,
            password: hashedPassword,
            phoneNo : phno,
            cart: { items: [] }
          });
          req.session.isLoggedIn = true;
          req.session.user = user;
          req.session.email =email;
          return user.save();
        })
        .then(result => {
          res.redirect('/home');
        });
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.email =email;
            return req.session.save(err => {
              console.log(err);
              res.redirect('/home');
            });
          }
          req.flash('error','Invalid password');
          res.redirect('/userRegister');
        })
        .catch(err => {
          console.log(err);
          res.redirect('/userRegister');
        });
    })
      .catch(err => console.log(err));
  };
  
  exports.logout = (req, res, next) => {
    req.session.destroy(err => {
      console.log(err);
      res.redirect('/home');
    });
  };