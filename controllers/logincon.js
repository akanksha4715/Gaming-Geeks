const fs = require('fs');
const path = require('path');
const url = require('url');

const customers=[];
const p = path.join(path.dirname(process.mainModule.filename),'data','customers.json'); //process.mainModule.filename will return the location of the main file which run the server.

exports.getloginpage=((req,res,next)=>{
    console.log(req.query.gameDetails);
    res.render('login',{gameDetails: req.query.gameDetails});
    });

exports.addlogindetails=(req,res,next)=>{
       // const querystrin =url.parse(req.url,true)
        customers.push({Game: req.body.gameDetails, Id : req.body.uname, Age : req.body.age});
        console.log(customers);
        console.log(req.query);
       // console.log(querystrin);
        fs.writeFile(p, JSON.stringify(customers),err=>{
            console.log(err);
        });
        res.redirect('/home');
};
