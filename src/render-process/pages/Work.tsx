import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import BackButton from 'components/BackButton'
const ipc = require('electron').ipcRenderer
const ButtonPage = () => {
  const openIterm = () => {
    console.error('123',ipc)
    ipc.send('openITermClick')
  }

  return (
    <div className="button-page">
      <BackButton></BackButton>
      <Button type="primary" onClick={openIterm}>打开iterm1</Button>
    </div>
  )
}

export default withRouter(ButtonPage)



