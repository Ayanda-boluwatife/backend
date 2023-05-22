const express = require("express");
const app = express();
const port = 7000;
const ejs = require("ejs");

const router = require("./handler/router")
app.use("/", router);

app.set("view engine", "ejs");
app.use(express.static("public"))

app.listen(port, () => {
    console.log(`my backend compilled successfully at port ${port}`);
})