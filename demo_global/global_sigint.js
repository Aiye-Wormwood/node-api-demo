// Begin reading from stdin so the process does not exit.
process.stdin.resume();

process.on('SIGINT', () => {
  console.log('Received SIGINT.  Press Control-D to exit.');
  process.exit();
});

//在浏览器中，顶层作用域就是全局作用域。 这意味着在浏览器中，
//var something 会定义一个新的全局变量。 
//在 Node.js 中则不同，顶层作用域不是全局作用域，
//var something 的作用域只在模块内。

//console moudle 在单独的目录中介绍