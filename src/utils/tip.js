// 提示方法汇总
const tipMsg = {
  /**
  * 弹出成功提示框
  */
  successMsg (title, duration = 500) {
    wx.showToast({
      title: title,
      icon: 'success',
      mask: true,
      duration: duration
    })
  },
  /**
  * 弹出错误提示框
  */
  errorMsg (title, duration = 500) {
    wx.showToast({
      title: title,
      image: '../../static/images/alert.png',
      mask: true,
      duration: duration
    })
  }
}
export default tipMsg
