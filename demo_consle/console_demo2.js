//示例2
const fs = require('fs');

const output = fs.createWriteStream('stdout.log');

const errorOutput = fs.createWriteStream('stderr.log');

const logger = new console.Console(output,errorOutput);

logger.log('Do Something Cool');
logger.log('你赤手空拳来到这个世界');

logger.error('Do something Bad');
logger.error('坏孩子干坏事儿');


console.assert(true,'does nothing');
//console.assert(false,'Whoops %s','didn\'t work');

process.on('uncaughtException',function () {
	console.log('uncaughtException:'+data);
});

console.dir(console);
