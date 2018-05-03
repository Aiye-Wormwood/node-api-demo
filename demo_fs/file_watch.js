const fs = require('fs');
// 例子，处理 fs.watch 监听器
// filename 参数仅在 Linux、macOS、Windows、以及 AIX 系统上支持。
// 不要以为 filename 参数总是在回调中提供,需要有一定的后备逻辑。
fs.watch('C:\\', { encoding: 'buffer' }, (eventType, filename) => {
  console.log(`事件类型是: ${eventType}`);
  if (filename) {
    console.log(`提供的文件名: ${filename}`);
  } else {
    console.log('未提供文件名');
  }
});