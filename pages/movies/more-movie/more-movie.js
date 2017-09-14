// pages/movies/more-movie/more-movie.js
var app = getApp();
var util = require("../../../utils/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies:{},
    navigateTitle:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var slogan = options.slogan;
    var dataUrl;
    this.data.navigateTitle = slogan;
    console.log(slogan);
    switch (slogan) {
      case "正在热映":
        dataUrl = app.globalData.doubanBase + '/v2/movie/in_theaters';
        break;
      case "即将上映":
        dataUrl = app.globalData.doubanBase + '/v2/movie/coming_soon';
        break;
      case "top250":
        dataUrl = app.globalData.doubanBase + '/v2/movie/top250';
        break;
    }
    util.http(dataUrl, this.processMovieData)
  },
  processMovieData: function (moviesData){
    var movies = [];
    for (var idx in moviesData.subjects) {
      var subject = moviesData.subjects[idx];
      var title = subject.title;
      var stars = subject.rating.stars;
      
      if (title.length > 6) {
        title = title.substring(0, 6) + "...";
      }
     
      var temp = {
        title: title,
        coverImg: subject.images.large,
        average: subject.rating.average,
        movieid: subject.id,
        stars: util.convertToStarsArray(stars)
      }
      movies.push(temp);

    }
    
    this.setData({ 
      movies:movies
      });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.navigateTitle,
      success:function(res){

      }
    })
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