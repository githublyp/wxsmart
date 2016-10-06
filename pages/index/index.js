//index.js
//获取应用实例
var app = getApp()
Page(app.createPage({
  data: {
    motto: '来自data数据',
    userInfo: {},
    loadingShow:false,
    loadingTitle:'拼命中...',
    toastShow:false,
    toastTitle:'欢迎回来',
    confirmShow:true,
    confirmMsg:'你确定退出？',
    index:0,
    array:['你','我','她'],
    open:false,
    actionSheetItems: ['item1', 'item2', 'item3', 'item4'],
    actionSheetHidden:true,
  },
  pageName:"home", 
  pageLog:true, 
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: app.getUrl('logs')
    });
  },  
  actionSheetTap: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  bindItemTap:function(e){
    app.log('点击：' + e.currentTarget.dataset.name);
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });   
  },
  actionSheetChange: function(e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    });
  },
  switch1Change:function(e){
    this.setData({
      open:e.detail.value
    });
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    });
  },  
  confirmCancel:function(e){
    app.log(123);
    this.setData({
      confirmShow:false
    });
  },
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
  onPageReady:function(){
    var self=this;          
    app.log({msg:'子页面已经准备好了'});
    setTimeout(function(){
      self.setData({
        //confirmShow:true
      });
    },100);     
  }
}))
