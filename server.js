/**
 * Created by SOFTMAN on 27-04-2017.
 */
var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
    extended : false
}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/reg', function (req, res) {
    console.log('request recieved');
    var name = req.query.name;
    var email = req.query.email;
    console.log("name : "+name+"\nemail: "+email);
    res.send("thank you")
});
app.post('/regPost', function (req, res) {
    console.log("req received")
    var name = req.body.name;
    var email = req.body.email;
    console.log("name : "+name+"\nemail: "+email);
    res.send("thank you")
});
app.listen(3000);
