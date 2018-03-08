/**
 * Created by lenovo on 2018/3/8.
 */
import axios from 'axios'
import { getRedirectPath } from "../utils"
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
  isAuth: false,
  msg: '',
  user:'',
  pwd:'',
  identity:null,
  redirectTo:''
}
//reducer
export function user(state=initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true, ...action.payload}
    case LOGIN_SUCCESS:
      return {...state, msg:'',redirectTo:getRedirectPath(action.payload),isAuth:true, ...action.payload}
    case LOAD_DATA:
      return {...state,...action.payload}
    case ERROR_MSG:
      return {...state, msg:action.msg, isAuth:false}
    default:
      return state
  }
}
// action creator
function errorMsg(msg) {
  return {msg, type: ERROR_MSG}
}
function registerSuccess(data) {
  return {type: REGISTER_SUCCESS, payload: data}
}
function loginSuccess(data) {
  return {type: LOGIN_SUCCESS, payload: data}
}
export function register({user,pwd,repeatpwd,identity}) {
  if(!user || !pwd) {
    return errorMsg('请输入用户名密码')
  }
  if(pwd !== repeatpwd) {
    return errorMsg('密码和确认密码不同')
  }
  return dispatch => {
    axios.post('/user/register',{user,pwd,identity}).then(response => {
      if(response.status === 200 && response.data.code === 0) {
        dispatch(registerSuccess({user,pwd,identity}))
      } else {
        dispatch(errorMsg(response.data.msg))
      }
    })
  }
}

export function login({user,pwd}) {
  if(!user || !pwd) {
    return errorMsg('请输入用户名密码')
  }
  return dispatch => {
    axios.post('/user/login',{user,pwd}).then(response => {
      if(response.status === 200 && response.data.code === 0) {
        dispatch(loginSuccess(response.data.data))
      } else {
        dispatch(errorMsg(response.data.msg))
      }
    })
  }
}