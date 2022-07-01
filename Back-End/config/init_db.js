// run node .\config\init_db.js in the cmd

const config = require("./config");
const mongoose = require("mongoose");
const User = require("../model/user");
const Product = require("../model/product");
const Admin = require("../model/admin");
const Attribute = require("../model/attribute");
const bcrypt = require("bcrypt");

mongoose.connect( config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true} );

async function createAdmin(){
    Admin.deleteMany({}).then(function(){
        console.log("Previous admin deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    admin = new Admin({ username: "admin", password: "pass" });
    const salt = await bcrypt.genSalt(10);
    admin.password = await bcrypt.hash("pass", salt);
    await admin.save();
    console.log("New admin created");
}

async function saveAttribute(attributeName){
    let attr = new Attribute({ name: attributeName });
    await attr.save();
}

async function addAttributess(){
    Attribute.deleteMany({}).then(function(){
        console.log("Previous attributes deleted"); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });

    await saveAttribute("color");
    await saveAttribute("size");
    await saveAttribute("country");
    await saveAttribute("original");
    await saveAttribute("guarantee");

    console.log("Attributes added");
}

async function inti_db() {
    await createAdmin();
    await addAttributess();

}

inti_db().then(()=>{console.log("database initiated!")})