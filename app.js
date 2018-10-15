const express = require('express')


const app = express()
let port;
var env = process.env.NODE_ENV || 'development'
if(env == "development")
{
    process.env.PORT = 2018;
}
console.log("app live on :",process.env.PORT)
app.get('/:uid',(req,res) => {

    res.send("Hello " + req.params.uid);
    res.status(200);
})

app.listen(process.env.PORT)
