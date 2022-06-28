const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const config = require("./config/config");

const app = express();
app.use(express.json());

// app.use(require("./route/users"));

const db = mongoose.connection;
mongoose.connect( config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true} );
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () { console.log("database Connected successfully"); });


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
