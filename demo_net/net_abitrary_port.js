const net = require('net');

const server = net.createServer((socket)=>{
	socket.end('Good Bye!');
}).on('error',()=>{
	throw err;
});

server.listen(()=>{
	console.log('open server on:',server.address());
});

server.on('error', (e) => {
  if (e.code === 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(() => {
      server.close();
      server.listen(PORT, HOST);
    }, 1000);
  } else {
  	console.log(e);
  }
});


