/**
 * Created by lenovo on 2018/3/8.
 */

export function getRedirectPath({identity,avatar}) {
  // 根据用户信息 返回跳转地址
  let url = identity === 1 ? '/boss' : '/user'
  if(!avatar) {
    url += 'info'
  }
  return url
}