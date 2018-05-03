//注意，对 module.exports 的赋值必须立即完成。 不能在任何回调中完成。 以下是无效的：
setTimeout(()=>{
	module.exports = {a:'Hello'};
},0);
