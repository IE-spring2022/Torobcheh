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
        const { seller_id } = req.body; //seller username
        try {
            let seller = await Seller.findById(seller_id);
            if (!seller) { return bad_request(res, "seller does not exist");}

            // get all the shops of that seller -> then get all the products attached to that shop
            // -> return all the reports of those products
            let shops = seller.shops
            let products = []
            for (let i = 0; i <shops.length; i++) {
                let productsOfShop = await Product.find({ shop: shops[i] });
                for (let j = 0; j <productsOfShop.length; j++) {
                    products.push(productsOfShop[j])
                }
            }

            let reports = []
            for (let i = 0; i <products.length; i++) {
                let reportsOfProd = await Report.find({product: products[i]});
                for (let j = 0; j <reportsOfProd.length; j++) {
                    products.push(reportsOfProd[j])
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