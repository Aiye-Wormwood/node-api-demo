const EventEmitter = require('events');
const ee = new EventEmitter();

setImmediate(()=>{
	ee.emit('error',new Error('这会崩溃'));
});

//connection.on('error')
//process.on('uncaughtException');
//Crash...
