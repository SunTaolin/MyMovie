// 定义变量接受数据，require函数里的路径用相对路径
var postsData = require('../../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = options.id;
    // console.log(id);
    this.setData({
      text: postsData.postList[id]
    })

    // var postsColected ={
    //   1:"true",
    //   2:"false",
    //   3:"true"
    // }

    // 定义缓存记录收藏状态
    var postsCollected = wx.getStorageSync("postsCollected");
    if (postsCollected) {
      var postCollected = postsCollected[id];
      this.setData({
        collected: postCollected
      })
    }
    else {
      var postsCollected = {};
    }
    if (postsCollected[id] == null) {
      postsCollected[id] = false;
      wx.setStorageSync("postsCollected", postsCollected);
    }
  },
  onCollection: function (event) {
    // console.log(this);
    var postsCollected = wx.getStorageSync("postsCollected");
    var it = this;
    var postCollected = postsCollected[it.data.text.postid];
    // // 修改当前收藏状态
    // postCollected = !postCollected;
    // postsCollected[this.data.text.postid] = postCollected;
    // wx.setStorageSync("postsCollected", postsCollected);
    // this.setData({
    //   collected: postCollected
    // })

    // //显示提示信息
    // wx.showToast({
    //   title: postCollected ? '收藏成功' : '取消成功',
    //   icon:'success',
    //   duration:2000
    // });

    // 弹出提示消息
    wx.showModal({
      title: postCollected ? '取消收藏？' : '确定收藏？',
      content: '',
      success:function(res){
        // console.log(this);
       if(res.confirm){
       
         // 修改当前收藏状态
         postCollected = !postCollected;
         postsCollected[it.data.text.postid] = postCollected;
         wx.setStorageSync("postsCollected", postsCollected);
        //  数据绑定，注意作用域
         it.setData({
           collected: postCollected
         })

         //显示提示信息
         wx.showToast({
           title: postCollected ? '收藏成功' : '取消成功',
           icon: 'success',
           duration: 2000
         });
       }else if(res.cancel){
         
       }
      }
    })

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

  }
})