//全局变量在所有模块中均可使用。 但以下变量的作用域只在模块内.
console.log('__dirname:',__dirname);
console.log('__filename:',__filename);

//exports module require() detail in module

//创建一个长度为10、且用0填充的Buffer
console.log('Buffer.alloc(10):',Buffer.alloc(10));

//创建一个长度为10、且用0x1填充的Buffer
console.log('Buffer.alloc(10,1):',Buffer.alloc(10,1));

//创建一个长度为 10、且未初始化的 Buffer。
//快，可能有旧数据
//需要使用 fill() 或 write() 重写
const buff3 = Buffer.allocUnsafe(10);
console.log('Buffer.allocUnsafe(10):',buff3);

buff3.fill(2);
console.log('Buffer.allocUnsafe(10) Fill(2):',buff3);

buff3.write('I Love This Game');
console.log('Buffer.allocUnsafe(10) Fill(2) write(I Love This Game):',buff3.toString());

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buf4 = Buffer.from([1, 2, 3]);
console.log('Buffer.from([1, 2, 3]):',buf4);

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from('tést');
console.log('Buffer.from(tést):',buf5);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
console.log('Buffer.from(tést,latin1):',buf6);

//定时任务
const immeVar = setImmediate(function(){
	console.log('setImmediate function');
});

clearImmediate(immeVar);
console.log('clearImmediate(immeVar)');

const timeout1 = setInterval(function(){
	console.log('setInterval function');
},1000)

clearInterval(timeout1);
console.log('clearInterval(timeout1)');

const timeout2 = setTimeout(function(){
	console.log('setTimeout function');
},2000);
clearTimeout(timeout2);
console.log('clearTimeout(timeout2)');
