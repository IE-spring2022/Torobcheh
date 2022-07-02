const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const User = require("../model/user");
const Seller = require("../model/seller");
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

app.get("/api/reports/seller", async (req, res) => {
        const { username } = req.body; //seller username
        try {
            let seller = await Seller.findOne({ username : username });
            if (!seller) { return bad_request(res, "seller does not exist");}

            // get all the shops of that seller -> then get all the products attached to that shop
            // -> return all the reports of those products
            let shops = seller.shops
            let products = []
            for (const shop of shops) {
                let productsOfShop = await Product.find({ shop: shop });
                for (const productOfShop of productsOfShop){
                    products.push(productOfShop)
                }
            }
            let reports = []
            for (const product in products){
                let reportsOfProd = await Report.find({product: product})
                for (const reportOfProd of reportsOfProd){
                    reports.push(reportOfProd)
                }
            }

            res.status(200).json({reports} );

        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);


module.exports = app;