//crypto 模块提供了加密功能，
//包含对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。
let crypto;
try{
	crypto = require('crypto');
	console.log('crypto is available!');
	
	const ciphers = crypto.getCiphers();
	console.log(ciphers); // ['aes-128-cbc', 'aes-128-ccm', ...]
}catch(e){
	console.log('不支持 Crypto');
}