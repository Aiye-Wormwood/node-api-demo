const net = require('net');
const connection = net.connect('localhost');

connection.on('error',(err)=>{
	console.log('------------------Error-----------------------')
	console.log(err);
	console.log('------------------Error-----------------------')
});

connection.pipe(process.stdout);