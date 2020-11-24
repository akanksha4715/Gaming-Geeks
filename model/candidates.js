const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const candSchema = new Schema({
    gameid : {
        type:String,
        required:true
    },
    gamename : {
        type:String,
        required:true
    },
    date : {
        type:String,
        required:true
    },
    time : {
        type:String,
        required:true
    },
    person_no : {
        type:String,
        required:true
    },
    prizepool : {
        type:String,
        required:true
    },
    username : {
        type:String,
        required:true
    },
    age : {
        type:String,
        required:true
    },
    userid : {
        type: Schema.Types.ObjectId,
        required : true,
        ref: 'user'

    }
});
module.exports =mongoose.model('customers',candSchema);

// const getDb = require('../util/db').getdb;
// class Candidates {
//     constructor(gameid,gamename,date,time,person_no,prizepool,username,age){
//         this.gameid=gameid;
//         this.gamename=gamename;
//         this.date=date;
//         this.time=time;
//         this.person_no=person_no;
//         this.prizepool=prizepool;
//         this.username=username;
//         this.age=age;
//     }

//     save() {
//     const db =getDb();
//     return db.collection('Candidate_Details')
//     .insertOne(this)
//     .then(result=>{
//         console.log(result);
//     })
//     .catch(err=>{
//         console.log(err);
//     });
//     }
//     static fetchbyid(){
        
//     }
// }
// module.exports=Candidates;