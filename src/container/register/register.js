/**
 * Created by lenovo on 2018/3/7.
 */

import React, {Component} from 'react'
import Logo from "../../component/logo/logo";
import {List, Radio, InputItem, WhiteSpace, Button} from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { register } from "../../redux/user.redux"

@connect(
  state=>state.user,
  { register }
)
class Register extends Component{
  constructor(props) {
    super(props)
    this.state = {
      user:'',
      pwd:'',
      repeatpwd:'',
      identity: 2 //1--boss,2--求职者
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister() {
    this.props.register(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
        <Logo></Logo>
        <List>
          {this.props.msg?<p className="error-msg">{this.props.msg}</p>:null}
          <InputItem
            onChange={val=>this.handleChange('user',val)}>用户名</InputItem>
          <InputItem type="password"
            onChange={val=>this.handleChange('pwd',val)}>密码</InputItem>
          <InputItem type="password"
            onChange={val=>this.handleChange('repeatpwd',val)}>确认密码</InputItem>
          <WhiteSpace/>
          <RadioItem
            checked={this.state.identity === 1}
            onChange={() => this.handleChange('identity',1)}>
            BOSS
          </RadioItem>
          <RadioItem
            checked={this.state.identity === 2}
            onChange={() => this.handleChange('identity',2)}>
            求职者
          </RadioItem>
          <WhiteSpace/>
          <Button type="primary" onClick={this.handleRegister.bind(this)}>注册</Button>
        </List>
      </div>
    )
  }
}
export default Register