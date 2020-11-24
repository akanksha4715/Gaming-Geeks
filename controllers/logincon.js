
const fs = require('fs');
const path = require('path');
const url = require('url');
const Candidates=require('../model/candidates');
//const customers_arr=[];
//const p = path.join(path.dirname(process.mainModule.filename),'data','customers.json'); //process.mainModule.filename will return the location of the main file which run the server.

exports.getloginpage=((req,res,next)=>{
    //console.log(req.query.gamename);
    res.render('login',{gameid: req.query.gameid ,gamename: req.query.gamename , date: req.query.date , time: req.query.time,
         Members_per_team_allowed: req.query.person_no , PrizePool: req.query.prizepool});
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
       userid : req.user._id,
    });
    req.user.addtocart(customers);
    
    customers.save()
    .then(result=>{
        console.log('Data entered');
        res.redirect('/cart');
    }).catch(err=>{
        console.log(err);
    });
    
}
else
res.send('<h2>You are Underage. Only people who are above 16 can join</h2>');
};
// exports.postTocart=(req,res,next)=>{
// const gameid = req.body.gameid;
// Candidates.findById(gameid)
// .then(game => {
//     return req.user.addtocart(game);
// }).then(result=>{
//     console.log(result);
//     
// });
// };
