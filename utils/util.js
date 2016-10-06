/*
工具公用对象
*/
var routes=require('./route.js');
var util={
  /*
  @method 基础页面
  @return object 页面对象
  @mark 此页面是为了过度，对微信的页面结构包装，便于以后扩展升级
  */
  getBaseCtr:function(){
    var self=this;
    return {
      data: {
        routes:routes.mapUrl()
      },
      pageName:"BASECTR",
      onLoad: function(options) {
        // Do some initialize when page load.        
        self.log({msg:'顶层onLoad,组件名：'+this.pageName});
        if(this.onPageLoad){
          this.onPageLoad();
        }        
      },      
      onReady: function() {
        // Do something when page ready.
        var self=this;
        setTimeout(function(){
          self.hideLoading();
          self.hideToast();
          self.hideConfirm();          
        },0);        
        if(this.onPageReady){
          this.onPageReady();
        }      
      },      
      hideLoading:function(){
        this.setData({
          loadingShow:false
        });
      },
      hideToast:function(){
        this.setData({
          toastShow:false
        });
      },
      hideConfirm:function(){
        this.setData({
          confirmShow:false
        });
      },
      onShow: function() {
        // Do something when page show.
        if(this.onPageShow){
          this.onPageeShow();
        }
      },
      onHide: function() {
        // Do something when page hide.
        if(this.onPageHide){
          this.obPageHide();
        }
      },
      onUnload: function() {
        // Do something when page close.
        if(this.onPageUnload){
          this.onPageUnload();
        }
      },
      onPullDownRefresh: function() {
        // Do something when pull down
        if(this.onPagePullDownRefresh){
          this.onPagePullDownRefresh();
        }
      }
    };
  },
  /*
  @method + 日志记录
  @param object 日志信息
  {msg:'',mode:mode||1}
  */
  log:function(obj){
    if(typeof(obj)=='string'||typeof(obj)=='number'){
      obj={msg:obj};
    }
    var obj=obj||{};
    var msg=obj.msg;    
    var mode=obj.mode||1;
    if(mode==2&&typeof(msg)=="object"){
      msg=JSON.stringify(msg);
    }    
    console.log(msg);
  },
  /*
  @method + 对象扩展
  @param destobj,srcobj 目标对象,源对象 
  */
  extend:function(target, source){
    var item;
    target=target||{};
    for (var p in source) {
      if (source.hasOwnProperty(p)) {
        item=source[p];
        //方法直接复制        
        if(typeof(item)==="function"){
          target[p] = item;
        }else if(typeof(item)==="string"){
          //字符串为空时复制
          if(target[p]==undefined){
            target[p] = item;
          }
        }else if(typeof(item)==="object"){
          //对象则递归复制
          target[p]=this.extend(target[p],item);
        }                       
      }
    }
    target.pageLog&&this.log({msg:target});    
    // 返回已经被修改的对象     
    return target;
  },
  /*
  @method 获取格式化时间
  @return  时间字符串
  */
  formatTime:function(date){
    var date=date?date:new Date();    
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return [year, month, day].join('/') + ' ' + [hour, minute, second].join(':');
  },  
};

/*暴漏外部调用接口*/
module.exports = {
  getBaseCtr:util.getBaseCtr,
  log:util.log,
  extend:util.extend,
  formatTime: util.formatTime,
  routes:routes,  
}
