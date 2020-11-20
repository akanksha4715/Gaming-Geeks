const getDb = require('../util/db').getdb;
class Candidates {
    constructor(gameid,gamename,date,time,person_no,prizepool,username,age){
        this.gameid=gameid;
        this.gamename=gamename;
        this.date=date;
        this.time=time;
        this.person_no=person_no;
        this.prizepool=prizepool;
        this.username=username;
        this.age=age;
    }

    save() {
    const db =getDb();
    return db.collection('Candidate_Details')
    .insertOne(this)
    .then(result=>{
        console.log(result);
    })
    .catch(err=>{
        console.log(err);
    });
    }
    static fetchbyid(){
        
    }
}
module.exports=Candidates;