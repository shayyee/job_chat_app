/**
 * Created by lenovo on 2018/3/7.
 */

import { combineReducers } from 'redux'
import { counter } from './index.redux'
import { auth } from './Auth.redux'

// 合并所有reducer

export default combineReducers({counter, auth})