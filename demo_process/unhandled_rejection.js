process.on('unhandledRejection', (reason, p) => {
  console.log('未处理的 rejection：', p, '原因：', reason);
  // 记录日志、抛出错误、或其他逻辑。
});

//somePromise.then((res) => {
//return reportToUser(JSON.pasre(res)); // 故意输错 `pasre`。
//}); // 没有 `.catch` 或 `.then`。

function SomeResource() {
  // 将 loaded 的状态设置为一个 rejected promise。
  this.loaded = Promise.reject(new Error('错误信息'));
}

const resource = new SomeResource();
// resource.loaded 上没有 .catch 或 .then。