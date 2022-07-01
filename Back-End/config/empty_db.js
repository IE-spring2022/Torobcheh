// run node .\config\empty_db.js in the cmd

const config = require("./config");
const mongoose = require("mongoose");
const User = require("../model/user");
const Product = require("../model/product");

mongoose.connect( config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true} );

User.deleteMany({}).then(function(){
    console.log("Users deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});

Product.deleteMany({}).then(function(){
    console.log("Products deleted"); // Success
}).catch(function(error){
    console.log(error); // Failure
});
