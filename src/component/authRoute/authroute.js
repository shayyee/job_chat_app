/**
 * Created by lenovo on 2018/1/19.
 */
import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends Component{
  componentDidMount() {
    const publicList = ['/login','register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)!==-1) {
      return null
    }
    // 获取用户信息
    axios.get('/user/info').then(response => {
      if(response.status === 200) {
        if(response.data.code === 0) {
          // 有登录信息的
        } else {
          // 无登录信息
          console.log(this.props.history)
        }
      }
    })
    // 是否登陆
    // 现在的url地址 login是不需要跳转的

    // 用户的identity
    // 用户是否完善信息 （选择头像 个人简介）
  }
  render(){
    return (
      <h2>AuthRoute</h2>
    )
  }
}

export default AuthRoute