/**
 * Created by lenovo on 2018/1/19.
 */
import React, {Component} from 'react'

import imgPath from './job.png'
import './logo.css'
class Logo extends Component{
  render() {
    return (
      <div className="logo-container">
        <img src={imgPath} alt=""/>
      </div>
    )
  }
}
export default Logo