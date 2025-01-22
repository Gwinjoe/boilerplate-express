let express = require('express');
let path = require("path")
let app = express();

console.log("Hello Express")

app.get("/", function (req, res) {
    const filePath = path.join(__dirname, "/views/index.html")
    res.sendFile(filePath);
})

































 module.exports = app;
