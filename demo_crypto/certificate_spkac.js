//SPKAC 最初是由 Netscape 实现的一种证书签名请求机制, 现在正式成为 HTML5's keygen element 的一部分.
const crypto = require('crypto');
const cert1 = new crypto.Certificate();
const cert2 = crypto.Certificate();

console.dir(cert1);
console.log('--------------- cert1 No more info -----------------');

console.dir(cert2);
console.log('--------------- cert2 No more info -----------------');