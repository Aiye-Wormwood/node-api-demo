const assert = require('assert');

assert.deepEqual({a:1},{a:'1'});
//Pass: Because 1='1';

//assert.deepStrictEqual({a:1},{a:'1'});
//Fail: Bacause 1!=='1'

const date = new Date();
const object = {};
const fakeDate = {};

Object.setPrototypeOf(fakeDate,Date.prototype);

assert.deepEqual(object,fakeDate);
//PASS: No classs.prototype

//assert.deepStrictEqual(object,fakeDate);
//FAIL: Bacause classs.prototype is diffrent

assert.deepStrictEqual(new Number(1),new Number(2));
//FAIL: class compare, value is compare too.

assert.deepStrictEqual(new String('foo'),new String('foo'));
//PASS: calss1 = class2,value1 = value2
