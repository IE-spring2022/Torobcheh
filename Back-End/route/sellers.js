const moment = require('moment');
const express = require("express");
const Product = require("../model/product");
const Shop = require("../model/shop");
const Seller = require("../model/seller")
const app = express();
const verifyToken = require("../helper/authJWT");
const bad_request = require("../helper/bad_request");




module.exports = app;