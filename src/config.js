/**
 * Created by lenovo on 2018/3/7.
 */
import axios from 'axios'
import {Toast} from 'antd-mobile'

axios.defaults.baseURL = 'http://localhost:9003'
axios.defaults.withCredentials = true
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// 拦截请求
axios.interceptors.request.use(function (config) {
  Toast.loading('加载中...', 0)
  return config
})

//拦截响应
axios.interceptors.response.use(function (config) {
  Toast.hide()
  return config
})