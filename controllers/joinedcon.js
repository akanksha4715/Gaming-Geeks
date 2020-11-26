const User = require('../model/user');
const bcrypt = require('bcryptjs');
exports.getpage=(req,res,next)=>{
    res.render('userRegister',{
        
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
            return req.session.save(err => {
              console.log(err);
              res.redirect('/home');
            });
          }
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