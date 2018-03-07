/**
 * Created by lenovo on 2018/3/7.
 */
// types
const ADD = '加'
const REMOVE = '减'

// reducer
export function counter(state = 0, action) {
  switch (action.type) {
    case ADD:
      return state + 1
    case REMOVE:
      return state - 1
    default:
      return 50
  }
}

// actions
export function addAction() {
  return {type: ADD};
}

export function removeAction() {
  return {type: REMOVE};
}

export function addAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addAction())
    }, 2000)
  }
}