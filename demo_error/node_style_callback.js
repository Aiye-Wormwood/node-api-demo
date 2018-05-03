const fs = require('fs');

function nodeStyleCallback(err,data){
	//identify err
	if(err){
		console.log('There was an error',err);
		return;
	}
	
	//process data
	console.log(data.toString());
}

fs.readFile('file_for_read.js',nodeStyleCallback);
fs.readFile('file_no_exists',nodeStyleCallback);
