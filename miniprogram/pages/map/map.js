// miniprogram/pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 40.040417,
    longitude: 116.273514,
    markers:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        //console.log("当前位置的经纬度为：", res.latitude, res.longitude);
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },

  /**
   * 地图放大缩小事件触发
   * @param {*} e 
   */
  //bindregionchange(e) {
  //  console.log('=bindregiοnchange=', e)
  //},

  /**
   * 点击地图事件，有经纬度信息返回
   * @param {*} e 
   */
  //bindtapMap(e) {
  //  console.log('=bindtapMap=', e)
  //},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //this.mapCtx = wx.createMapContext('map')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //悬浮按钮跳转到上传页面
 
  adddetial: function () {
    wx.redirectTo({
     url: '../upload/upload'
    })
 },
})