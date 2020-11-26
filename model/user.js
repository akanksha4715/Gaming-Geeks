const mongoose = require('mongoose');
const { model } = require('./candidates');
const schema=mongoose.Schema;
const user = new schema({
    
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    phoneNo : {
        type : String,
        required : true
    },
    cart : {
        items : [
            {
            id : {
                type : schema.Types.ObjectId,
                ref : 'customers',
                required : true
            }
        }
        ]
    }
});
user.methods.addtocart = function(game){
    const updatedcartitems = [...this.cart.items];
    updatedcartitems.push({
        id: game._id,
    });
    const updatedcart = {
        items : updatedcartitems
    }
    this.cart = updatedcart;
    return this.save();
    

}
module.exports = mongoose.model('user',user);