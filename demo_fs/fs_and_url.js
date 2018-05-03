const fs = require('fs');
const {URL} = require('url');
const fileUrl = new URL('file:///tmp/hello');
console.log(fileUrl.href);

fs.readFileSync(fileUrl);
