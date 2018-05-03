process.on('message',function(m){
	console.log('mssage from parent:'+JSON.stringify(m));
});

process.send({from:'child'});
