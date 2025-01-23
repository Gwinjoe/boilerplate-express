let express = require('express');
let path = require("path")
let app = express();

console.log("Hello Express")

app.get("/", function (req, res) {
    const filePath = path.join(__dirname, "/views/index.html")
    res.sendFile(filePath);
})


app.use("/public", express.static(path.join(__dirname, "/public")))


app.get("/json", function (req, res) {
    res.json({
        message: "Hello json"
    })
})





























 module.exports = app;
