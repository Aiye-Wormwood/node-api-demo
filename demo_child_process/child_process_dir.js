const util = require('util');
const exec = util.promisify(require('child_process').exec);
async function dirExample() {
	const {stdout,stderr} = await exec('dir',{encodeing:'utf-8'});
//	stdout.setEncodeing('utf-8');
	console.log('stdout:',stdout);
	console.log('stderr:',stderr);
}
dirExample();
