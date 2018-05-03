const repl = require('repl');
const msg = 'message';

repl.start('> ').context.m = msg;

//var pp;
//
//Object.defineProperty(repl.context, 'm', {
//configurable: false,
//enumerable: true,
//value: msg
//});