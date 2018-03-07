/**
 * Created by lenovo on 2018/3/7.
 */

import { createStore } from 'redux'

// 通过reducer建立store
// 这样可以根据老的state和action 生成新的state
function counter(state = 0, action) {
  switch (action.type) {
    case '加':
      return state + 1
    case '减':
      return state - 1
    default:
      return 50
  }
}
// 1. 新建store
const store = createStore(counter);
const init = store.getState()
console.log(init)

function listener() {
  const current = store.getState()
  console.log(`现在有苦无${current}支`);
}
// 订阅 在发生变化后自动触发listener
store.subscribe(listener)
// 派发事件 传递action
store.dispatch({type: '加'})
// console.log(store.getState())