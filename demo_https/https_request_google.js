const https = require('https');
const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
//key: fs.readFileSync('test/fixtures/keys/agent2-key.pem'),
//cert: fs.readFileSync('test/fixtures/keys/agent2-cert.pem'),
  agent: false
};

const req = https.request(options, (res) => {
	console.log(`状态码: ${res.statusCode}`);
	console.log(`响应头: ${JSON.stringify(res.headers)}`);
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		console.log(`响应主体: ${chunk}`);
	});
	res.on('end', () => {
		console.log('响应中已无数据。');}
	);
}).on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});