var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var app = express();
const ejsLint = require('ejs-lint');
//define route
const route = require('./routes/route');

    //portno
const port = 3000;
//adding middlewares
app.use(cors());
//body-parser
app.use(bodyparser.json());
//app.set('views', path.join(__dirname, 'views'));
//app.set('views', './views/');
app.set("views", path.join(__dirname, "views"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//adding static files
app.use(express.static(path.join(__dirname,'public')));
//routes

app.use('/', route);
//app.use('')
//connect to mongodb
mongoose.connect('mongodb://localhost:27017/ticketing_web');
//on connection
mongoose.connection.on('connected',()=>{
    console.log('connected to db mongodb @ 27017');
});
 
//on error
mongoose.connection.on('error',(err)=>{
    if(err)
    {
       console.log('error in db connection'+err);
    }
});

//testing server
app.get('/', (req, res) => {
    res.send('foobar');
});
app.listen(port, () => {

    console.log('server started at port no :'+port);

});
