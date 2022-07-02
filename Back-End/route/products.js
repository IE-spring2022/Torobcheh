const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const User = require("../model/user");
const Shop = require("../model/shop");
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");

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

app.get( "/api/product", async (req, res) => {
        const { id } = req.body; // gets the shop name for shop
        try{
            let product = await Product.findById(id)
            res.status(200).json({product} );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error");
        }
    }
);

app.get( "/api/products/filtered", async (req, res) => {
        const { brand, category, name } = req.body; // gets the shop name for shop
        try{
            // let prod = await Product.findOne({})
            // console.log(prod._id)
            let products = await Product.find({brand: "", category: "", name: "name1"})
            res.status(200).json({products} );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error");
        }
    }
);


app.post( "/api/products", async (req, res) => {
    const { name, category, brand, price, attributes, shop, link, image } = req.body; // gets the shop name for shop
    try {
        //todo what do i need to check here?

        // let user = await User.findOne({ username : username });
        // if (user) { return bad_request(res, "user name is already taken!");}

        let shop_objId = await Shop.findOne({ name : shop });
        if (!shop_objId) { return bad_request(res, "shop does not exist!");}

        product = new Product({
            name: name, category: category, brand: brand, price: price, attributes: JSON.stringify(attributes),
            date_added: moment(), shop: shop_objId, link: link, image: image
        });
        await product.save();
        res.status(200).json({product, message: "product successfully added"} );

    } catch (err) {
        console.log(err.message);
        res.status(400).send("Error in Saving");
    }
    }
);

app.put( "/api/products/add_favorite", async (req, res) => {
        const { username, product } = req.body; // gets the shop name for shop
        try {
            //todo user.favorites.push(product)

            let user = await User.findOne({ username : username });
            if (!user) { return bad_request(res, "username does not exist!");}

            user.favorites.push(product); //todo check this!

            await user.save();
            res.status(200).json({user, message: "favorite successfully added"} );

        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);

module.exports = app;