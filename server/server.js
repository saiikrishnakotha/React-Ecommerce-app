//import the node modules 
//require() is predefined function used to import node modules 

const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const jsonwebtoken = require("jsonwebtoken");
const express_async_handler = require("express-async-handler");
const dotenv    =  require("dotenv");
const bcryptjs  =  require("bcryptjs");
const Products  =  require("./model/productModel")

//to develop the rest apis we need to create the rest object 
// we must dependent on "express" to develop the rest object

const app = express();

//where app is the rest object 
//by using "app" object we will develop rest services like "POST,GET, DELETE UPDATE"

//enable the cors policy
//providing communication between different ports called as "cors"

app.use(cors())

//set the json has MIME type

app.use(bodyparser.json);


//read the data from client side 
app.use(bodyparser.urlencoded({extended:false}))

//make the availabilty of .env file 
dotenv.config();