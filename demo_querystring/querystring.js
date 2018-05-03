const querystring = require('querystring');
console.log(querystring.parse('foo=bar&abc=xyz&abc=123'));

//console.log(querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
//                { decodeURIComponent: gbkDecodeURIComponent }))

console.log(querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' }));

console.log(querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':'));