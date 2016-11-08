var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});//caching is valuable 
//but can slow us down during development so it is turned off for now


// var locals = {
// 	title: "An Example",
// 	people: [
// 		{name: 'Gandalf'},
// 		{name: 'Frodo'},
// 		{name: 'Hermione'}
// 	]
// };


// nunjucks.render('index.html', locals, function(err, output) {
// 	console.log(output);
// });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];

app.listen(3000, function () {
	console.log("server listening");
});

app.get('/', function(request, response){
	response.render('index', {title: 'Hall of Fame', people: people})
	//response.send("this is a response to get");

})

app.get('/news', function(request, response){
	response.send("this is a NEWWWW response to get");

})

app.use('/test', function(req,res, next){
	console.log(req.method + " " + req.originalUrl);
	next();
})

app.get('/test', function(request, response){
	response.send("this is another response to get");

})

app.post('/test', function(request, response){
	response.send("this is a POST response to get");

})

app.all('/special', function(req,res){
	response.send("you've reached the special area");
	
})
