//HMAC: Hash-based Message Authentication Code，即基于Hash的消息鉴别码
const crypto = require('crypto');
const secret = 'abcdefg';

const hash = crypto.createHmac('sha256',secret)
					.update('I Love cupcakes')
					.digest('hex');

console.log(hash);

//8c7b1c61b9f031b999f0fdaa07a0f16a9e9e1e0184427c3119d80ec1150765ee

//各种算法得到的摘要的长度
//算法	摘要长度（字节）
//MD2	16
//MD5	16
//SHA	20
//SHA1	20
//SHA224	28
//SHA256	32
//SHA384	48
//SHA512	64