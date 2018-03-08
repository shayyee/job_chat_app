/**
 * Created by lenovo on 2018/3/7.
 */

import { combineReducers } from 'redux'
import { user } from "./redux/user.redux"
// 合并所有reducer

export default combineReducers({user})