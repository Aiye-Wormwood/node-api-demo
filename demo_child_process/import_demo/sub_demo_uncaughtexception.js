process.on('uncaughtException',function (err) {
	console.log('Caught Exception:'+err);
})

setTimeout(function () {
	console.log('This will still run');
},500);

//call noexistFun cause an exception,but don't catch it
noexistenFunc();

console.log('This will not run.');
