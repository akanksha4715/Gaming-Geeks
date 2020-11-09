const fs = require('fs');
const path = require('path');
exports.getloginpage=((req,res,next)=>{
    res.render('login');
    });

const customers=[];
const p = path.join(path.dirname(process.mainModule.filename),'data','customers.json'); //process.mainModule.filename will return the location of the main file which run the server.

exports.addlogindetails=(req,res,next)=>{
        
        customers.push({Game: req.query.gameDetails, Id : req.body.uname, Age : req.body.age});
        console.log(customers);
        fs.writeFile(p, JSON.stringify(customers),err=>{
            console.log(err);
        });
        res.redirect('/home');
};
