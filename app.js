//app.js
var utils=require('./utils/util.js');

App({
  onLaunch: function () {    
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);    
  },  
  onShow: function () {
    this.log('App Show');
  },
  onHide: function () {
    this.log('App Hide');
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  },
  /*
  @method + 基础对象，用于扩展
  @return object 基本对象
  */
  getBaseCtr:function(){
    return utils.getBaseCtr();
  },
  /*
  @method + 创建页面主要子页面调用共享基本方法属性
  @param object 新对象
  */
  createPage:function(obj){
    return utils.extend(obj,this.getBaseCtr());    
  },    
  /*
  @method + 日志记录
  @param object 日志信息
  {msg:'',mode:mode||1}
  */
  log(obj){
    utils.log(obj);
  },
  /*
  @method 获取页面路径
  @param 页面名称
  @return 页面路径
  */
  getUrl:function(name){
    return utils.routes.getUrl(name);
  }  
})