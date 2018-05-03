const crypto = require('crypto');
const cipher = crypto.createCipher('aes192','a password');

let encrypted = cipher.update('some clear text data','utf8','hex');
encrypted += cipher.final('hex');

console.log(encrypted);

const decipher = crypto.createDecipher('aes192','a password');
let decrypted = decipher.update(encrypted,'hex','utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);

console.assert('some clear text data',decrypted);
