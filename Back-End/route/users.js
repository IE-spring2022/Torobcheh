const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const User = require("../model/user");
const Shop = require("../model/shop");
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");

app.get( "/api/favorites", async (req, res) => {
        const { user_id } = req.body;
        try{
            let user = await User.findById(user_id);
            res.status(200).json(user.favorites);
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error");
        }
    }
);

module.exports = app;