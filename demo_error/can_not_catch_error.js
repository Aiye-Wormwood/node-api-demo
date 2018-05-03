const fs = require('fs');

try{
	fs.readFile('file_not_exists',(err,data)=>{
		//假设的错误在这里抛出
		if(err){
			throw err;
		}
	});
}catch(e){
	//这里不会捕获到抛出的异常
	console.log('----------Ready for Catch Some Error-----------')
	console.log(e);
	console.log('----------Error ：Caught Something Big-----------')
}
