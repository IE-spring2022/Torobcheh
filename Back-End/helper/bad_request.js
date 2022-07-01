function bad_request(res, message) {
    return res.status(400).json({error: {message: message}});
}

module.exports = bad_request;