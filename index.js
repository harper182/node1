var express = require('express');
var PORT = 8081;
var app = express();
app.get('/',function(req,res){
	res.send('hello world');
})
app.listen(PORT);
console.log('Running on http://localhost:'+PORT);
