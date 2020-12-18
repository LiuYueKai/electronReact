import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Button } from 'antd';
const ButtonPage = () => {
  let history = useHistory();
  const openWork = () => {
    history.push({
      pathname: "/work"
    });
  }
  const openFund = () => {
    history.push({
      pathname: "/fund"
    });
  }
  return (
    <div className="button-page">
      <Button type="primary" onClick={openWork}>工作便捷操作</Button>
      <Button type="primary" onClick={openFund}>理财相关</Button>
    </div>
  )
}

export default withRouter(ButtonPage)



