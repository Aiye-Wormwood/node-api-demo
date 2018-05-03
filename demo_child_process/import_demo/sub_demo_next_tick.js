var http=require('http');
var s = http.createServer(function (req,res) {
	res.writeHead(200,{});
	res.end('foo');
	console.log('http send foo response');
	process.nextTick(function () {
		console.log('tick ... ');
	});
});


//process.nextTick(function () {
//	//noexitsFunc cause exception
//	iAmAMistake();
//	console.log('tick 2 ...')
//});
//
//process.on('uncaughtException',function (e) {
//	console.log('Uncaught Exception Handler : '+e);
//});
//
//process.nextTick(function () {
//	console.log('tick 3 ...');
//})

console.log('now starting ... server!');
s.listen(8000);
