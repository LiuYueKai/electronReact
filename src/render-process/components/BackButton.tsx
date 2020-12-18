import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import { Button } from 'antd';
const ButtonPage = () => {
  let history = useHistory();
  const back = () => {
    history.push({
      pathname: "/"
    });
  }
  return (
    <Button type="primary" onClick={back}>返回</Button>
  )
}

export default withRouter(ButtonPage)



