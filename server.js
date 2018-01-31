var express=require('express');

var app=express();
app.get('/',function (res,res){
	res.send('Hello World')
})

app.use ('/static', express.static('src'))

app.listen(3000, function () {
	console.log('Example app listing on port 3000!')
})