/**
 * 执行命令行之后根据结果通知render层
 * @param {*} ls 对象
 * @param {*} event 事件
 */
export const spawnLog = (ls, event) => {
  const sendMsg = (res) => {
    let msg = JSON.stringify(res)
    event.sender.send('res', msg);
  }

  ls.stderr.on('data', (data) => {
    // 执行失败打印日志并且传递消息至render层
    console.log(`stderr: ${data}`);
    let res = {
      sucess: false,
      msg: `执行失败: ${data}`
    }
    sendMsg(res)
  });

  ls.on('close', (code, a, b, c) => {
    if (code == 0) {
      let res = {
        sucess: true,
        msg: '执行完成'
      }
      sendMsg(res)
    }

  });
}
