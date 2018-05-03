//Promise unhandledRejection rejectionHandled uncaughtException
const unhandledRejections = new Map();
process.on('unhandledRejection', (reason, p) => {
  unhandledRejections.set(p, reason);
  console.log('unhandledRejections.set(%s, %s)',reason,p);
});

process.on('rejectionHandled', (p) => {
  unhandledRejections.delete(p);
  console.log('unhandledRejections.delete(%s)',p);
});

//process 因为是全局变量，所以无需使用 require()。
process.on('exit',(code)=>{
	console.log('exit code:'+code);
});

