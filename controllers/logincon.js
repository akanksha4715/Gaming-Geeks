const fs = require('fs');
const path = require('path');
const url = require('url');

const customers=[];
const p = path.join(path.dirname(process.mainModule.filename),'data','customers.json'); //process.mainModule.filename will return the location of the main file which run the server.

exports.getloginpage=((req,res,next)=>{
    res.render('login');
    });

exports.addlogindetails=(req,res,next)=>{
        const querystrin =url.parse(req.url,true).search;
        customers.push({Game: req.query, Id : req.body.uname, Age : req.body.age});
        console.log(customers);
        console.log(querystrin);
        fs.writeFile(p, JSON.stringify(customers),err=>{
            console.log(err);
        });
        res.redirect('/home');
};
