//当 Node.js 直接运行一个文件时，`require.main` 会被设为它的 `module`。
//这意味着可以通过 `require.main === module` 来判断一个文件是否被直接运行：
console.log('require.main:',require.main);

require('./foo');

console.log(`input process.channel = ${process.channel}`);

// `module` 提供了一个 `filename` 属性（通常等同于 `__filename`）
//所以可以通过检查 `require.main.filename` 来获取当前应用程序的入口点。
console.log(`Detail Input Main:${require.main.filename}`);


//模块在第一次加载后会被缓存。 这也意味着（类似其他缓存机制）
//如果每次调用 require('foo') 都解析到同一文件，则返回相同的对象。

//多次调用 require(foo) 不会导致模块的代码被执行多次。 
//这是一个重要的特性。 借助它, 可以返回“部分完成”的对象，
//从而允许加载依赖的依赖, 即使它们会导致循环依赖。

//如果想要多次执行一个模块，可以导出一个函数，然后调用该函数。

