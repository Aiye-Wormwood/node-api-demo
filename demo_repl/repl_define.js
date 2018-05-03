const repl = require('repl');

const replServer = repl.start({ prompt: '> ' });

replServer.defineCommand('sayhello', {
  help: '打招呼',
  action(name) {
//  this.lineParser.reset();
    this.bufferedCommand = '';
    console.log(`Hello , ${name} !`);
    this.displayPrompt();
  }
});

replServer.defineCommand('saybye', function saybye() {
  console.log('Good Bye @');
  this.close();
});