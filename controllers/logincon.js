exports.getloginpage=((req,res,next)=>{
    res.render('login');
    });

    const customers=[];

exports.addlogindetails=(req,res,next)=>{
        customers.push({Id:req.body.uname,
                        Age : req.body.age});
                        console.log(customers);
                        res.redirect('/home');
};