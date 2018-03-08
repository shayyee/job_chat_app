/**
 * Created by lenovo on 2018/3/7.
 */
import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import Logo from "../../component/logo/logo";
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from "../../redux/user.redux"

@connect(
  state=>state.user,
  { login }
)
class Login extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd:''
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleLogin() {
    this.props.login(this.state)
  }
  register() {
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
            <InputItem
              onChange={val=>this.handleChange('user',val)}>用户名</InputItem>
            <InputItem type="password"
              onChange={val=>this.handleChange('pwd',val)}>密码</InputItem>
          </List>
          <WhiteSpace/>
          <Button onClick={this.handleLogin.bind(this)} type="primary">登录</Button>
          <WhiteSpace/>
          <Button onClick={this.register.bind(this)} type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}
export default Login