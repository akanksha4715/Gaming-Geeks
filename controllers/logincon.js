
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
        if(Age>16){
    const customers= new Candidates(gameid,game,date,time,Members_per_team_allowed,PrizePool,Id,Age);
    customers.save()
    .then(result=>{
        console.log('Data entered');
        res.redirect('/home');
    }).catch(err=>{
        console.log(err);
    });
}
else
res.send('<h2>You are Underage. Only people who are above 16 can join</h2>');

       /* customers_arr.push({Game: req.body.gamename, Date: req.body.date , Time: req.body.time,
            Members_per_team_allowed: req.body.person_no , PrizePool: req.body.prizepool, Id : req.body.uname, Age : req.body.age});
        console.log(customers);
        
        fs.writeFile(p, JSON.stringify(customers),err=>{
            console.log(err);
        });*/
        
};
