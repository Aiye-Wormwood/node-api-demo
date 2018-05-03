const circle = require('./circle.js');
console.log(`半径为4的圆的面积是${circle.area(4)}`);

console.log(`半径为4的圆的周长是${circle.circumference(4)}`);

// 判定程序是直接运行 还是 通过require运行
console.log(`foo require.main === module:${require.main === module}`);

//寻找程序运行的入口程序文件名称
console.log(`Foo Inpput File ${require.main.filename}`);

console.log(`foo process.channel = ${process.channel}`);
