var express = require('express');
var bodyParser = require('body-parser');
var app = express();  //api endpoint, request, response
var fs = require("fs");
var db = require('./database/db1');
var path = require("path");

//var routerApi = express.Router(); 

const hostname = '127.0.0.1';
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
routerApi.get('/', (req, res) => {
	res.json({"message": "okokok/"})
})
*/

//app.use('/api', routerApi); 

const routes = require('./routes/routes.js')(app,fs,db);

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`)
});


