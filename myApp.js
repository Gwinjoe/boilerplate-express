require("dotenv").config();
let express = require('express');
let path = require("path")
let app = express();
const bodyParser = require("body-parser")

console.log("Hello Express")



app.get("/", function (req, res) {
    const filePath = path.join(__dirname, "/views/index.html")
    res.sendFile(filePath);
})

app.use(bodyParser.urlencoded({extended: false}))

app.use("/public", express.static(path.join(__dirname, "/public")))

app.use(function (req, res, next) {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
    
})

app.get("/json", function (req, res) {

    const style = process.env.MESSAGE_STYLE
    res.json({
        message: style === "uppercase" ? "Hello json".toUpperCase() : "Hello json",
    })
})


app.get("/now", function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.json({
        time: req.time
    })
})


app.get("/:word/echo", function (req, res) {
    const word = req.params.word;
    res.json({
        echo: word,
    })
})

app.route("/name").get(function (req, res) {
    const first = req.query.first;
    const last = req.query.last;
    res.json({
        name: `${first} ${last}`
    })
}).post(function (req, res) {
    const first = req.body.first;
    const last = req.body.last;

    res.json({
        name: `${first} ${last}`,
    })
})


















 module.exports = app;
