const Seller = require("../model/seller");
const bad_request = require("./bad_request");
const Admin = require("../model/admin");

//todo  use this in proper places
async function verifyAccess(res, username, accessType) {// accessType is 'admin'/'seller' //todo bonus these verifications is really cool
    if (accessType === 'admin'){
        let admin = await Admin.findOne({ username: username });
        if (!admin)
            return bad_request(res, "you are not the admin!");
    }
    else if(accessType === 'seller'){
        let seller = await Seller.findOne({ username: username });
        if (!seller)
            return bad_request(res, "you are not the admin!");
    }
}

module.exports = verifyAccess;
