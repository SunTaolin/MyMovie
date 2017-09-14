var app = getApp();
var util = require('../../utils/utils.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isTheaters:{},
    comingSoon:{},
    top250:{}
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var it = this;
    var movieObj;
    // 定义访问数据接口变量
    var isTheatersUrl = app.globalData.doubanBase+'/v2/movie/in_theaters'+'?count=3';
    var comingSoonUrl = app.globalData.doubanBase + '/v2/movie/coming_soon' + '?count=3';
    var top250Url = app.globalData.doubanBase + '/v2/movie/top250' + '?count=3';
    this.getMovieListData(isTheatersUrl,'isTheaters');
    this.getMovieListData(comingSoonUrl,'comingSoon');
    this.getMovieListData(top250Url,'top250');
    // this.setData({
    //   movieInfo: movieObj
    // })
    
  },
  onMoreTap:function(event){
    var slogan = event.currentTarget.dataset.slogan;
    // console.log(event);
    wx.navigateTo({
      url: 'more-movie/more-movie?slogan='+slogan,
    })
  },
  // 获取电影数据
  getMovieListData:function(url,classType){
    var it = this;
    wx.request({
      url: url,
     
      method: 'GET',
      header: { 'Content-Type': "json" },
      success: function (res) {
       
        console.log(res.data);
        // it.processMovieObj(res.data);
        it.processMovieData(res.data, classType);
       
      },
      fail: function (error) {
        console.log("falied");
        console.log(error);
      },

    })
  },
  // 处理获取的电影数据
  processMovieData: function (moviesData,classType){
    var movies = [];
    for (var idx in moviesData.subjects){
      var subject = moviesData.subjects[idx];
      var title = subject.title;
      var stars = subject.rating.stars;
      var slogan;
      if(title.length>6){
        title = title.substring(0,6) + "...";
      }
      switch(classType){
        case "isTheaters":
          slogan = "正在热映";
          break;
        case "comingSoon":
          slogan = "即将上映";
          break;
        case "top250":
          slogan = "top250";
          break;
      }
      movies.slogan = slogan;
      var temp = {
        title:title,
        coverImg: subject.images.large,
        average: subject.rating.average,
        movieid: subject.id,
        stars: util.convertToStarsArray(stars)
      }
      movies.push(temp);
      
    }
    var movieKey = {};
    movieKey[classType] ={
       movies:movies,
       slogans:slogan
       };
    this.setData(movieKey);
      // this.setData({
      //   movies:movies
      // })
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