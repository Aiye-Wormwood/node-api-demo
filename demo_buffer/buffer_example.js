const buf = Buffer.from('hello world','ascii');

console.log(buf.toString('hex'));

console.log(buf.toString('base64'));

const buf2 = Buffer.from([1,2,3]);
for(const b of buf2){
	console.log(b);
}
