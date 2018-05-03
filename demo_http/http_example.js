const http=require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World \n');
});
server.listen(port,hostname,()=>{
	console.log("服务器正在运行 URL:http://${hostname}:${port}/",hostname,port);
});


//、Agent 类、ClientRequest 类 、Server 类、ServerResponse 类、IncomingMessage 类
