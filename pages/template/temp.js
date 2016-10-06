//name.js
//获取应用实例
var app = getApp()
Page(app.createPage({
  data: {
    
  },
  pageName:"name",//页面名称唯一标识
  pageLog:true,  //页面日志开关  
  /*
  继承方法，默认放在最上面
  页面加载回调
  */
  onPageLoad: function () {    
    app.log({msg:'子组件onLoad'});
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })    
    });       
  },
  /*
  页面加载完成
  */
  onPageReady:function(){
    var self=this;          
    app.log({msg:'子页面已经准备好了'});
    setTimeout(function(){
      self.setData({
        //confirmShow:true
      });
    },100);     
  },
  /*绑定事件回调，默认最下面*/

}))
