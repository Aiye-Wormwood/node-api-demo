console.log('------------PID:',process.pid);

process.on('exit', (code) => {
  console.log(`即将退出，退出码：${code}`);
});

process.on('exit', (code) => {
  setTimeout(() => {
    console.log('该函数不会被执行');
  }, 0);
});

process.on('warning', (warning) => {
  console.warn(warning.name);    // 打印告警名称
  console.warn(warning.message); // 打印告警信息
  console.warn(warning.stack);   // 打印堆栈信息
});

const events = require('events');

events.defaultMaxListeners = 1;

process.on('foo',()=>{});

process.on('foo',()=>{});