// 封装Flyio请求

// 初始化flyio请求
function createFly () {
  if (mpvuePlatform === 'wx') {
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null
  }
}
// 处理get请求
export function get (url, params = {}, showErr = true) {
  const fly = new createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        const data = (response && response.data) || {}
        if (data.error_code === 0) {
          resolve(response)
          console.log(response)
        } else {
          if (showErr) {
            mpvue.showToast({
              title: data.msg || '请求失败',
              icon: 'none',
              duration: 1500
            });
          }
          reject(response)
        }
      }).catch(err => {
        console.log(err)
      })
    })
  }
}
// 处理POST请求
export function post (url, params = {}, showErr = true) {
  const fly = new createFly()
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        const data = (response && response.data) || {}
        if (data.error_code === 0) {
          resolve(response)
          console.log(response)
        } else {
          if (showErr) {
            mpvue.showToast({
              title: data.msg || '请求失败',
              icon: 'none',
              duration: 1500
            });
          }
          reject(response)
        }
      }).catch(err => {
        console.log(err)
      })
    })
  }
}