const express = require("express");
const path = require("path");
const app = express();
require('dotenv').config();
const axios= require('axios');

app.use(express.static(path.join(__dirname,'public')));
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
const port = process.env.HOST_PORT||3000;

app.get("*", function(req, res, next){
	res.render('home');
})

app.listen(port, function(){
	console.log('***Server running on port: '+port+"***");
});