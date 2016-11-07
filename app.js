var express = require('express');

var app = express();

app.listen(3000, function () {
	console.log("server listening");
});

app.get('/', function(request, response){
	response.send("this is a response to get");

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
