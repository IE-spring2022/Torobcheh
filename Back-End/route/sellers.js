const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const Shop = require("../model/shop");
const Seller = require("../model/seller")
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");

app.post( "/api/sellers", async (req, res) => {
        //todo do a [verify token] to check if he is the admin?
        const { name, seller, text } = req.body; // gets the username for seller
        try {
            //todo what do i need to check here?

            let seller_objId = await Seller.findOne({ username : seller });
            if (!seller_objId) { return bad_request(res, "seller does not exist!");}

            let shop = new Shop({ name: name, seller: seller_objId, text: text });
            await shop.save();
            res.status(200).json({shop, message: "shop successfully added"} );

        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);


module.exports = app;