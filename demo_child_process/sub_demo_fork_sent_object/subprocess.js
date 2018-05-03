process.on('message',(m,server)=>{
	if(m==='server'){
		server.on('connection',(socket)=>{
			socket.end('子进程处理 Message');
		});
	}
});
