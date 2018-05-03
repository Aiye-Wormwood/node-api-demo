const path = require('path');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));

console.log(path.join('/foo','baz','asdf'));

console.log(path.parse('C:\\path\\dir\\file.txt'));

console.log('foo\\bar\\baz'.split(path.sep));