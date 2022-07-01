const express = require("express");
const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const bad_request = require("../middleware/bad_request");
const app = express();
const verifyToken = require("../middleware/authJWT");


function calc_payload(user) {
    return {username: user.username}; //previously userId: user.id     todo this isn't working! this is what's in the payload!
}

app.post( "/api/auth/signup", async (req, res) => {
        const { username, password, email } = req.body;
        try {
            let user = await User.findOne({ username : username });
            if (user) { return bad_request(res, "user name is already taken!");}
            user = await User.findOne({ email : email });
            if (user) { return bad_request(res, "email belongs to a user!");}

            user = new User({ username: username, password: password, email: email, favorites: [] });
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt); //todo bonus hashing the pwds!
            await user.save();
            const payload = calc_payload(user);
            jwt.sign( payload, config.secret , { expiresIn: 10000 }, (err, token) => {
                    if (err) throw err;
                res.status(200).json({token, message: "successful signup"});
                }
            );
        } catch (err) {
            console.log(err.message);
            res.status(400).send("Error in Saving");
        }
    }
);


app.post("/api/auth/login",[verifyToken], async (req, res) => {
      const { username, password } = req.body;
      try {
        let user = await User.findOne({ username: username });
        if (!user)
          return bad_request(res, "user does not exist!");
        
        const isMatch = await bcrypt.compare(password, user.password); //todo bonus password encryption!
        if (!isMatch)
          return bad_request(res, "wrong password!");

        const payload = calc_payload(user);
        jwt.sign( payload, config.secret , { expiresIn: 10000 }, (err, token) => {
            if (err) throw err;
                res.status(200).json({token, message: "successful"});
        }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({ message: "Server Error" });
      }
});


module.exports = app;