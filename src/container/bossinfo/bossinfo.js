/**
 * Created by lenovo on 2018/3/9.
 */
import React, {Component} from 'react'
import {NavBar,InputItem,TextareaItem,Button} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import AvatarSelector from '../../component/avatarSelector/avatarselector'
import {connect} from 'react-redux'
import {update} from "../../redux/user.redux"
@connect(
  state=>state.user,
  {update}
)
class BossInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      title:''
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  selectAvatar(imgname) {
    this.setState({
      avatar: imgname
    })
  }
  render() {
    const redirect = this.props.redirectTo
    const pathname = this.props.location.pathname
    return (
      <div>
        {redirect&&redirect!==pathname?<Redirect to={this.props.redirectTo}></Redirect>:null}
        <NavBar mode="light">Boss个人信息</NavBar>
        <AvatarSelector selectAvatar={this.selectAvatar.bind(this)}></AvatarSelector>
        <InputItem
          onChange={val=>this.handleChange('title',val)}>招聘职位</InputItem>
        <InputItem
          onChange={val=>this.handleChange('company',val)}>公司名称</InputItem>
        <InputItem
          onChange={val=>this.handleChange('money',val)}>职位薪资</InputItem>
        <TextareaItem rows='3' title="职位要求" autoHeight
          onChange={val=>this.handleChange('desc',val)}></TextareaItem>
        <Button
          style={{backgroundColor: '#ff9fb7'}}
          type="primary"
          onClick={()=>{
            this.props.update(this.state)
          }}>保存</Button>
      </div>
    )
  }
}

export default BossInfo