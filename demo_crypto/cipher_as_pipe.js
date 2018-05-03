const crypto = require('crypto');
const fs = require('fs');
const cipher = crypto.createCipher('aes192', 'a password');

const input = fs.createReadStream('test.js');
const output = fs.createWriteStream('test.enc',{encodeing:'base64'});

//cipher.setOutputEncodeing('hex');

input.pipe(cipher).pipe(output);

//const decipher = crypto.createDecipher('aes192','a password');
//const input2 = fs.createReadStream('test.enc');
//const output2 = fs.createWriteStream('test2.js');
//
//input2.pipe(decipher).pipe(output2);
