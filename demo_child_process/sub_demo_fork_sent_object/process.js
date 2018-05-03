const subprocess = require('child_process').fork('subprocess.js');


const server = require('net').createServer();
server.on('connection',(socket)=>{
	socket.end('父进程处理 Message');
});

server.on('error',(error)=>{
	console.log('Server On Error:'+error);
})

server.listen(12338,'127.0.0.1',()=>{
	console.log('Server On 127.0.0.1 12338');
	subprocess.send('server',server);
});
