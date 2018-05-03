const fs = require('fs');
fs.readFile('file not exists',(err,data)=>{
	if(err){
		console.error('Read file failed',err);
		return;
	}
	
	//process data here below.
	
	
});
