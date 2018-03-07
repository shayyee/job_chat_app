/**
 * Created by lenovo on 2018/3/7.
 */
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { login, getUserData } from "./Auth.redux"

// 两个reducer,每个reducer都有一个state
// 合并reducer

@connect(
  state=>state.auth,
  { login, getUserData }
)
class Auth extends Component{
  // constructor() {
  //   super()
  //   this.state = {
  //     data: {}
  //   }
  // }
  componentWillMount() {
    this.props.getUserData();
    // axios.get('/data').then(response => {
    //   if(response.status === 200)
    //  this.setState({data: response.data})
    // })
  }
  render() {
    return (
      <div>
        <h2>当前用户 {this.props.user}，年龄；{this.props.age}</h2>
        {this.props.isAuth ? <Redirect to="/dashboard"></Redirect> : null}
        <h2>请先登录</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth