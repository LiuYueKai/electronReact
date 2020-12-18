import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';
import BackButton from 'components/BackButton'
const ButtonPage = () => {
  const openIterm = () => {
    console.error('基金详情')
  }
  return (
    <div className="button-page">
      <BackButton></BackButton>
      <Button type="primary" onClick={openIterm}>基金详情</Button>
    </div>
  )
}

export default withRouter(ButtonPage)



