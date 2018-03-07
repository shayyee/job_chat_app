/**
 * Created by lenovo on 2018/3/7.
 */
import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const USER_DATA = 'USER_DATA'
const initState = {
  isAuth: false,
  user: 'shayyee',
  age: 20
}
// reducer
export function auth(state=initState,action) {
  console.log(state,action)
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth:true}
    case LOGOUT:
      return {...state, isAuth:false}
    case USER_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}

// action creator
export function getUserData(){
  // dispatch用来通知数据修改
  return dispatch => {
    axios.get('/data').then(response => {
      if (response.status === 200) {
        dispatch(userData(response.data))
      }
    })
  }
}

export function userData(data) {
  return {type: USER_DATA, payload: data}
}
export function login() {
  return {type: LOGIN}
}
export function logout() {
  return {type: LOGOUT}
}
