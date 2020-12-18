import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home'
import Work from './pages/Work'
import Fund from './pages/Fund'


const ipc = require('electron').ipcRenderer
// 监听通讯，失败的情况下进行提示
ipc.on('res', function (event, resMsg) {
  let res = JSON.parse(resMsg)
  if (!res.sucess) {
    alert(res.msg)
  }
})

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/work" component={Work} />
        <Route path="/fund" component={Fund} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
