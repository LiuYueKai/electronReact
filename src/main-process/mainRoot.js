const ipc = require('electron').ipcMain;
const spawn = require('child_process').spawn;
import {spawnLog} from './utils'

/**
 * 打开item的处理
 */
ipc.on('openITermClick', function (event) {
  const ls = spawn('open', ['-a', 'iTerm', '/Users/liuyk/iCloudDrive-old/code/1、云打印/workspace/feat/print-website-dev', '/Users/liuyk/iCloudDrive-old/code/1、云打印/workspace/feat/print-adapter', '/Users/liuyk/iCloudDrive-old/code/1、云打印/workspace/feat/print-design']);
  spawnLog(ls, event);
})
