try{
	const m = 1;
	console.log('before:n = m + z');
	const n = m + z;
	console.log('after:n = m + z');
}catch(e){
	console.dir(e);
}
console.log('run with exception ok!');