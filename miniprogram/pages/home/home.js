// miniprogram/pages/home/home.js
const app = getApp()
const db = wx.cloud.database()
Page({  
  data: {
    userinfo: null,
  },
  onShow(){
    wx.getUserInfo({
      success: res=>{
        this.setData({
          userinfo: res.userInfo
        })
      }
    })
  },
  temp:function() {
    wx.navigateTo({
      url: '../mypositionrecord/mypositionrecord'
     })
  }
})