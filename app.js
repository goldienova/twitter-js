'use strict';

var express = require('express');
var nunjucks = require('nunjucks');
var app = express();


const routes = require('./routes/');
app.use('/', routes);

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});//caching is valuable 
//but can slow us down during development so it is turned off for now



//const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, function () {
	console.log("server listening");
});

app.use('/test', function(req,res, next){
	console.log(req.method + " " + req.originalUrl);
	next();
})




// app.get('/', function(request, response){
// 	response.render('index', {title: 'Hall of Fame', people: people})
// 	//response.send("this is a response to get");

// })

// app.get('/news', function(request, response){
// 	response.send("this is a NEWWWW response to get");

// })




// app.post('/test', function(request, response){
// 	response.send("this is a POST response to get");

// })

// app.all('/special', function(req,res){
// 	response.send("you've reached the special area");
	
// })
