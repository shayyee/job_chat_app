/**
 * Created by lenovo on 2018/3/7.
 */
import React, {Component} from 'react'
import Logo from "../../component/logo/logo";
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Login extends Component{
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem>用户名</InputItem>
            <InputItem>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button type="primary">登录</Button>
          <WhiteSpace/>
          <Button onClick={this.register.bind(this)} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login