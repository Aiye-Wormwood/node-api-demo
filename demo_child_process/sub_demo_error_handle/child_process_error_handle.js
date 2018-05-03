var spawn = require('child_process').spawn;
var child = spawn('bad_commond');

child.on('error',(err)=>{
	console.log('Filed to start child process 1.'+err);
});

var child2 = spawn('dir .',['noneexistFile']);

//child2.stderr.on('data',function(data){
//	console.log('Error msg a from process 2:'+data);
//});

//child2.stdout.on('data',function(data){
//	console.log('Data msg a from process 2:'+data);
//});

child2.on('error',(err)=>{
	console.log('Failed to start b child process 2.'+err);
});

//child2.on('data',(data)=>{
//	console.log('Data to start b child process 2.'+data);
//});
