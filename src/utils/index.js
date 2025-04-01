function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

/**
 * 检查微信会话是否过期
 */
// function checkSession () {
//   return new Promise(function (resolve, reject) {
//     wx.checkSession({
//       success: function () {
//         resolve(true)
//       },
//       fail: function () {
//         reject(false)
//       }
//     })
//   })
// }

/**
 * 调用微信登录
 */
function login () {
  return new Promise(function (resolve, reject) {
    // wx.login({
    //   success: function (res) {
    //     console.warn('res==', res)
    //     if (res.code) {
    //       // 登录远程服务器
    //       console.log(res)
    //       resolve(res)
    //     } else {
    //       reject(res)
    //     }
    //   },
    //   fail: function (err) {
    //     reject(err)
    //   }
    // })
    wx.login({
      success: (res) => {
        if (res.errMsg === 'login:ok') {
          wx.getUserInfo({
            success: (res) => {
              resolve(res)
            },
            error: (res) => {
            }
          })
        } else {
          reject(res)
        }
      },
      fail: function (err) {
        reject(err)
      }
    })
  })
}

function redirect (isboole, url) {
  // isboole false 默认跳转到登录界面，true 自定义跳转URL
  // 判断页面是否需要登录
  if (isboole) {
    wx.removeStorageSync('userInfo')
    wx.removeStorageSync('token')
    wx.redirectTo({
      url: '/pages/login/main'
    })
    return false
  } else {
    wx.redirectTo({
      url: url
    })
  }
}

export default {
  formatNumber,
  formatTime,
  // checkSession,
  login,
  redirect
}
