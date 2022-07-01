const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const config = require("../config/config")
const app = express();
const verifyToken = require("../middleware/authJWT");
const bad_request = require("../middleware/bad_request");

//todo verify token faghat bara favorite gereftane dige!

app.get( "/api/products", async (req, res) => {
        try{
            let products = await Product.find({});
            res.status(200).json({products} );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error");
        }
    }
);


module.exports = app;