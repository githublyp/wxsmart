//logs.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page(app.createPage({
  data: {
    clear:false,
    logs:[],
    loadingShow:true,
  },
  pageName:"logs", 
  pageLog:true, 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onPageLoad: function () {    
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  /*自定义事件开始*/
  clearStore:function(event){    
    wx.clearStorage();   
    this.setData({
      clear:true
    });     
  }
}))
