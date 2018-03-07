/**
 * Created by lenovo on 2018/3/7.
 */
import React, { Component } from 'react'
import {addAction, removeAction, addAsync} from "./index.redux"
import { connect } from 'react-redux'
// 装饰器写法
@connect(
  // 需要state里的什么属性放到props
  state=>({num:state}),
  // 需要什么action放到props 自动dispatch
  {addAction, removeAction, addAsync})
class App extends Component{
  render() {
    console.log('App render')
    return (
      <div>
        <h1>现在有苦无{this.props.num}支</h1>
        <button onClick={this.props.addAction}>申请苦无</button>
        <button onClick={this.props.removeAction}>上缴苦无</button>
        <button onClick={this.props.addAsync}>异步2秒后申请苦无</button>
      </div>
    )
  }
}
// 非装饰器写法
// const mapStatetoProps = (state) => {  // 把state放到props中
//   return {num:state}
// }
// const actionCreators = {addAction, removeAction, addAsync}
// App = connect(mapStatetoProps, actionCreators)(App)
export default App