process.on('exit',function () {
	setTimeout(function () {
		console.log('This will not run');
	},100);
	console.log('Bye.');
});
