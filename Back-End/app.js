const express = require("express");
const mongoose = require("mongoose");
const PORT = 3000;
const config = require("./config/config");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());
app.use(require("./route/auth"));
app.use(require("./route/products"))
app.use(require("./route/shops"))
app.use(require("./route/attributes"))
app.use(require("./route/reports"))
app.use(require("./route/sellers"))


const db = mongoose.connection;
mongoose.connect( config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true} );
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () { console.log("database Connected successfully"); });


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
