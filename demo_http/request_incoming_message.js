const http = require('http');
const options = {
  host: 'nodejs.cn',
};
const req = http.get(options);
req.end();

//IncomingMessage 对象由 http.Server 或 http.ClientRequest 创建，
//并作为第一个参数分别递给 'request' 和 'response' 事件。 
//它可以用来访问响应状态、消息头、以及数据。

// res http.IncomingMessage 类  输出了Header信息

req.once('response', (res) => {
  const ip = req.socket.localAddress;
  const port = req.socket.localPort;
  console.log(`你的IP地址是 ${ip}，你的源端口是 ${port}。`);
  // consume response object
  
  console.log('Res:',res.rawHeaders);
});

//要获取响应，需为 'response' 事件添加一个监听器到请求对象上。 
//当响应头被接收到时，'response' 事件会从请求对象上被触发 。 
//'response' 事件被执行时带有一个参数，该参数是一个 http.IncomingMessage 实例。

//http.Server 类 该类继承自 net.Server.