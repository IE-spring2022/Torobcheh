const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const Shop = require("../model/shop");
const Seller = require("../model/seller")
const User = require("../model/user")

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
            if (shop) {
                // console.log(shop)
                return bad_request(res, "a shop with this name already exists!");}

            // console.log("seller: ", seller)
            let sellerObjId = await Seller.findById(seller);
            if (!sellerObjId) { return bad_request(res, "seller does not exist!");}

            shop = new Shop({ name: name, seller: sellerObjId, text: text });
            await shop.save();
            sellerObjId.shops.push(shop);
            await sellerObjId.save();
            res.status(200).json({message: "added"});
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);

app.put( "/api/sellers/edit_info", async (req, res) => {
        const { seller_id, newUsername, newPhone, newEmail } = req.body;

        try {
            let seller = await Seller.findById(seller_id);
            if(newUsername !== "" && newUsername !== null){
                let seller1 = await Seller.findOne({username: newUsername})
                let seller2 = await User.findOne({username: newUsername})
                if (seller1 || seller2){return bad_request(res, "user/seller with this username exists!")}
                seller.username = newUsername
            }
            if(newPhone !== "" && newPhone !== null){
                let seller1 = await Seller.findOne({phone: newPhone})
                if (seller1){return bad_request(res, "seller with this phone exists!")}
                seller.phone = newPhone
            }
            if(newEmail !== "" && newEmail !== null){
                let seller1 = await Seller.findOne({email: newEmail})
                if (seller1){return bad_request(res, "seller with this email exists!")}
                seller.email = newEmail
            }

            await seller.save();
            res.status(200).json({seller} );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);

// todo commit seller add shop
module.exports = app;