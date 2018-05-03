const net = require('net');
const client = new net.Socket();

client.connect(12338,'127.0.0.1',function() {
	console.log('Connect To: 127.0.0.1 1337');
	client.write('I am Chunk Norri! 中国');
});

client.on('close',function () {
	console.log('Connection is closed!');
});

client.on('error',function () {
	console.log('Connection is failed');
})

client.on('data',function(data){
	console.log('Data:'+data);
	
	client.destroy();
});
