const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    "_id" : {type:String,required:true},
    "name": {type:String,required:true},
    "price": {type:Number,required:true},
    "brand":{type:String,required:true},
    "rating":{type:Number,required:true},
    "imagUrl":{type:String,required:true},
    "category" : {type:String,required:true},
    "description" : {type:String,required:true}


})

const Products = mongoose.model("Products",productSchema);
module.exports = Products;