// pages/event/event.js
var clickCount=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'点击了谁'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
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
  tapClick:function(event){
    clickCount++;
    var id=event.currentTarget.id;
    var dataset=event.currentTarget.dataset;
    console.log("初始值：" + this.data.msg);
    this.setData({'msg': id+'被点击了，总共被点击了'+clickCount+'次.'+dataset.hi+":"+dataset.chm});
    console.log("修改前："+this.data.msg);
    this.data.msg='b';
    console.log("修改后:"+this.data.msg);
  }
})