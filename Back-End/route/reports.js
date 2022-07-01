const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const User = require("../model/user");
const Report = require("../model/report")
const Attribute = require("../model/attribute")
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");


app.post( "/api/reports", async (req, res) => {
        const { issuer, product, text } = req.body;
        try {
            let user = await User.findOne({ username : issuer });
            if (!user) { return bad_request(res, "user does not exist");}

            let report = new Report({ issuer: user, product: product, text: text }); //todo check what frontend passes for product and how to cast it to product objectId
            await report.save();
            res.status(200).json({report, message: "report successfully added"} );

        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);


module.exports = app;