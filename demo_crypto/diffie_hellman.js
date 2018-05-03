//Diffie-Hellman:一种确保共享KEY安全穿越不安全网络的方法
//https://baike.so.com/doc/5447835-5686203.html
const crypto = require('crypto');
const assert = require('assert');
console.time('Diffie-Hellman');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

console.timeEnd('Diffie-Hellman');

// OK
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));
console.log('Diffie-Hellman assert Ok');


