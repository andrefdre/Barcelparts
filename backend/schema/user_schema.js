const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

//Creates the schema structure for products
const UserSchema = new mongoose.Schema({
    _id: {type:String, required:true},
    User_FirstName: {type:String,required:true},
    User_LastName: {type:String,required:true},
    User_Image: {type:String,required:true},
    Email: {type:String, required:true},
    Address: {type:String, default:""},
    Carrinho: [{
       Product_id: {type:String},
       Product_amount: {type:String}
    }],
    Owner: {type:Boolean, default:false}
},
{ collection : 'Accounts', _id: false }); //Tells from what collection of mongodb to get the information

module.exports = mongoose.model("User", UserSchema);
