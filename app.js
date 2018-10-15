const express = require('express')
var bodyParser = require('body-parser');


let trainDescriptorsByClass = []
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

let port;
var env = process.env.NODE_ENV || 'development'
if (env == "development") {
    process.env.PORT = 2018;
}
console.log("app live on :", process.env.PORT)
app.get('/api/:uid', (req, res) => {

    res.send("Hello " + trainDescriptorsByClass);
    res.status(200);
})

app.post('/api', (req, res) => {
    var descriptorByClass = {
        "descriptors": req.body.descriptors[0],
        "className": req.body.className
    }


    trainDescriptorsByClass.push(descriptorByClass)
    res.status(200)
    res.send(trainDescriptorsByClass)
})

app.listen(process.env.PORT)
