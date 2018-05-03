const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

let m = 0;

myEmitter.on('event',()=>{
	console.log('event fired! No '+(++m));
});

myEmitter.emit('event');

//-----------------------------------//

myEmitter.on('event',function (a,b) {
	console.log(a,b,this);
});

myEmitter.emit('event','a','b');

//----------ES6----------------------//
myEmitter.on('event',(a,b)=>{
	console.log(a,b,this);
});

myEmitter.emit('event','a','b');

//------------------async again ----//
myEmitter.on('event',(a,b)=>{
	setImmediate(()=>{
		console.log('异步发生的事件 %s %s No',a,b,m);
	});
});
myEmitter.emit('event','a','b');

//---------------once ---------------//
myEmitter.once('event',()=>{
	console.log('Once Handler Process :',m);
});

myEmitter.emit('event','for','once');

myEmitter.emit('event','for','once2');

myEmitter.emit('event','for','once3');

//-----------uncaughtExeption-------//
process.on('uncaughtException',(err)=>{
	console.error('uncaughtException happened '+err);
});

//-best practise register for error-//
myEmitter.on('error',(err)=>{
	console.error('error handler found:'+err);
});

//-----------------let it crash ----//
myEmitter.emit('error',new Error('whoops! crashed'));

console.log('main process still runing');

