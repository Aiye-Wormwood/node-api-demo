var net = require('net');
var server = net.createServer();

var HOST = '127.0.0.1';
var PORT = 6969;

server.listen(PORT,HOST);

console.log('Server Listening  Address Info : '+server.address());

server.on('connection',function (sock) {
	console.log('Connected:'+sock.remoteAddress+':'+sock.remotePort);
	
	sock.on('data',function (data) {
		console.log('Data From '+sock.remoteAddress+' Is :'+data);
		sock.write('You Said '+data); 
	});
	
	sock.on('close',function (data) {
		console.log('CLOSED:'+sock.remoteAddress+':'+sock.remotePort);
	});
});
