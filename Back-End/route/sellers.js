const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const Shop = require("../model/shop");
const Seller = require("../model/seller")
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

//todo verify token for seller and admin seperately


app.put( "/api/sellers/add_shop", async (req, res) => {
        const { name, seller, text } = req.body;
        try {
            let shop = await Shop.findOne({ name : name });
            if (shop) { return bad_request(res, "a shop with this name already exists!");}

            let sellerObjId = await Seller.findOne({ seller : seller });
            if (!seller) { return bad_request(res, "seller does not exist!");}

            shop = new Shop({ name: name, seller: sellerObjId, test: text });
            await shop.save();
            seller.shops.push(shop);
            await seller.save();
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);

// todo commit seller add shop
module.exports = app;