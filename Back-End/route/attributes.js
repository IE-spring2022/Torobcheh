const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const Shop = require("../model/shop");
const Seller = require("../model/seller")
const Attribute = require("../model/attribute")
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");


app.post( "/api/attributes", async (req, res) => {
        const { name } = req.body;
        try {
            let attribute = await Attribute.findOne({ name : name });
            if (attribute) { return bad_request(res, "attribute already exists!");}

            attribute = new Attribute({ name: name });
            await attribute.save();
            res.status(200).json({attribute, message: "attribute successfully added"} );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);


app.get( "/api/attributes", async (req, res) => {
        try {
            let attributes = await Attribute.find({});
            res.status(200).json({attributes} );

        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);


module.exports = app;