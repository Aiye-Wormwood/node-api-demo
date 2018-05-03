const https = require('https');

https.get('https://nodejs.org/en/', (res) => {
  console.log('状态码：', res.statusCode);
  console.log('请求头：', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});