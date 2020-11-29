const path = require('path');
const url = require('url');
const Candidates=require('../model/candidates');
const nodemailer = require('nodemailer');
const sendgrid = require('nodemailer-sendgrid-transport');
const stripe = require('stripe')(process.env.STRIPE_KEY);   //('sk_test_51HsC49GLqLmUJKTaKNYtNLsS2PYa8CwsOdHpVT4isN47lpNhbpz71d3I0cXIc0oUPK8BInxWU89KSavSsvxZzCgV00kM132HbA');

const transporter = nodemailer.createTransport(sendgrid({
    auth : {
        
        api_key : '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'
    }
}));

exports.getloginpage=((req,res,next)=>{
    const fee =req.query.fees;
    const gamename=req.query.gamename;
    return stripe.checkout.sessions.create({
        payment_method_types : ['card'],
        line_items :  [
            {
            name : gamename,
            amount : fee*100,
            currency : 'inr',
            quantity : 1,
            },
        ],
        success_url: req.protocol + '://' + req.get('host') + '/joined/success', // => http://localhost:3000
        cancel_url: req.protocol + '://' + req.get('host') + '/login'
    }).then(session =>{
    res.render('login',{
        // isAuthenticated: req.session.isLoggedIn,
         gameid: req.query.gameid ,
         gamename: req.query.gamename , 
         date: req.query.date , 
         time: req.query.time,
         Members_per_team_allowed: req.query.person_no ,
          PrizePool: req.query.prizepool,
          fees : req.query.fees,
          sessionid : session.id,
        });
    }).catch(err=>{
        console.log(err);
    });
    });

exports.addlogindetails=(req,res,next)=>{
       // const querystrin =url.parse(req.url,true)
       const gameid=req.body.gameid;
       const game=req.body.gamename;
        const date= req.body.date ;
        const time = req.body.time;
      const Members_per_team_allowed= req.body.person_no ;
       const PrizePool= req.body.prizepool;
        const Id = req.body.uname;
        const Age = req.body.age;
        const fee= req.body.fees;
        const email = req.session.email;
        if(Age>=16){
    const customers= new Candidates({
       gameid : gameid,
       gamename: game,
        date: date,
        time: time,
       person_no: Members_per_team_allowed,
        prizepool: PrizePool,
       username: Id,
       age: Age,
       fees:fee,
       paid : false,
       userid : req.user._id,
    });

    req.user.addtocart(customers); 
    
    customers.save()
    .then(result=>{
        console.log('Data entered');
        //res.redirect('/joined');
        transporter.sendMail({
            to: email,
            from : 'hellogaminggeek@gmail.com',
            subject : 'JOINED SUCCESSFULLY',
            html : '<h1>May The Force Be With You!</h1><br><h3>RoomID will be shared via SMS 1 hour prior to the scheduled time of the game</h3>'
        });
    }).catch(err=>{
        console.log(err);
    });
    
}
else
res.send('<h2 style ="text-align: center">You are Underage. Only people who are above 16 can join</h2>');
};

exports.getcart=(req,res,next)=>{
    req.user.populate('cart.items.id') //Doesn't return a promise so use execPopulate
    .execPopulate().then(user=>{    //Explicitly executes population and returns a promise
        const gamedetails = user.cart.items;
        console.log(gamedetails);
        console.log(user);
        res.render('cart',{
            //isAuthenticated: req.session.isLoggedIn,
            game : gamedetails,
            path : '/joined'
        });
    }).catch(err=>{
        console.log(err);
    });
};
exports.paid=(req,res,next)=>{
    const id = req.user._id;
    Candidates.findOne({userid:id,paid :false})
    .then(user=>{
        user.paid = true;
        return user.save();
    })
    .then(result=>{
        res.redirect('/joined');
    })
    .catch(err=>{
        console.log(err);
    });
};

