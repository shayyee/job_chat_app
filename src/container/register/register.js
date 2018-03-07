/**
 * Created by lenovo on 2018/3/7.
 */

import React, {Component} from 'react'
import Logo from "../../component/logo/logo";
import {List, Radio, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends Component{
  constructor(props) {
    super(props)
    this.state = {
      identity: 1 //1--boss,2--求职者
    }
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
        <List>
          <InputItem>用户名</InputItem>
          <InputItem>密码</InputItem>
          <InputItem>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem checked={this.state.identity === 1}>
            BOSS
          </RadioItem>
          <RadioItem checked={this.state.identity === 2}>
            求职者
          </RadioItem>
          <WhiteSpace/>
          <Button type="primary">注册</Button>
        </List>
      </div>
    )
  }
}
export default Register