const express = require("express");
const User = require("../model/user");
const Seller = require("../model/seller");
const Admin = require("../model/admin");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bad_request = require("../helper/bad_request");
const app = express();
const verifyToken = require("../helper/authJWT");


function calc_payload(user) {
    return {username: user.username}; //previously userId: user.id
}

function checkPassword(password){
    if(password.length < 8)
        return "password must be at least 8 characters"
    else if(password.toUpperCase() === password)
        return "password must contain lowercase letters"
    else if(password.toLowerCase() === password)
        return "password must contain uppercase letters"
    else if(!(/\d/.test(password)))
        return "password must contain digits"
    else
        return "" // this means the password acceptable
}

app.post( "/api/auth/signup/user", async (req, res) => {
        const { username, password, email, phone } = req.body;
        let passCheck = checkPassword(password)
        if(passCheck !== "")
            return bad_request(res, passCheck)

        try {
            let user = await User.findOne({ username : username });
            if (user) { return bad_request(res, "user name is already taken!");}
            user = await User.findOne({ email : email });
            if (user) { return bad_request(res, "email belongs to a user!");}

            user = new User({ username: username, password: password, email: email, phone: phone, favorites: [] });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();
            const payload = calc_payload(user);
            jwt.sign( payload, config.secret , { expiresIn: 10000 }, (err, token) => {
                    if (err) throw err;
                res.status(200).json({token, message: "successful signup", user_type: "user"});
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);

app.post( "/api/auth/signup/seller", async (req, res) => {
        const { username, password, email, phone} = req.body;
        let passCheck = checkPassword(password)
        if(passCheck !== "")
            return bad_request(res, passCheck)

        try {
            let seller = await Seller.findOne({ username : username });
            if (seller) { return bad_request(res, "username is already taken!");}
            seller = await Seller.findOne({ email : email });
            if (seller) { return bad_request(res, "email belongs to a seller!");}

            seller = new Seller({ username: username, password: password, email: email, phone:phone, shops: [] });
            const salt = await bcrypt.genSalt(10);
            seller.password = await bcrypt.hash(password, salt);
            await seller.save();
            const payload = calc_payload(seller);
            jwt.sign( payload, config.secret , { expiresIn: 10000 }, (err, token) => {
                    if (err) throw err;
                    res.status(200).json({token, message: "successful signup", user_type: "seller"});
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }


    }
);



app.post("/api/auth/login/all",async (req, res) => {//todo remove the verify token from here!
      const { username, password } = req.body;
      try {
        let user = await User.findOne({ username: username });
        let seller = await Seller.findOne({ username: username });
        let admin = await Admin.findOne({ username: username });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password); //todo bonus password encryption!
            if (!isMatch) { return bad_request(res, "wrong password!");}

            const payload = calc_payload(user);
            jwt.sign(payload, config.secret, {expiresIn: 10000}, (err, token) => {
                if (err) throw err;
                res.status(200).json({token, message: "successful", user_type: "user"});
            });
        }
        else if (seller) {
            const isMatch = await bcrypt.compare(password, seller.password); //todo bonus password hashing and encryption!
            if (!isMatch) { return bad_request(res, "wrong password!"); }

            const payload = calc_payload(seller);
            jwt.sign( payload, config.secret , { expiresIn: 10000 }, (err, token) => {
                    if (err) throw err;
                    res.status(200).json({token, message: "successful", user_type: "seller"});
                }
            );
        }
        else if (admin) {
            const isMatch = await bcrypt.compare(password, admin.password);
            if (!isMatch){ return bad_request(res, "wrong password!");}

            const payload = calc_payload(admin);
            jwt.sign( payload, config.secret , { expiresIn: 10000 }, (err, token) => {
                    if (err) throw err;
                    res.status(200).json({token, message: "successful", user_type: "admin"});
                }
            );
        }
        else{
            return bad_request(res, "user does not exist!");
        }
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Server Error" });
      }
});

module.exports = app;