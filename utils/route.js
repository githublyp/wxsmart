/*
页面路由
*/
var route={
    map:{
        "index":{
            path:"pages/index/index",
        },
        "map":{
            path:"pages/map/map"
        },
        "logs":{
            path:"pages/logs/logs"
        },
        "404":{
            path:""
        }
    }
};
/*
路径映射，模板中使用
*/
route.mapUrl=function(){
    var map={};
    for(var name in this.map){
        var url=(this.map[name]||{}).path.toString().replace("pages","..");    
        url&&(map[name]=url); 
    }
    return map;    
}
/*
获取路径，逻辑层使用
*/
route.getUrl=function(name){
    return (this.map[name]||this.map['404']).path.replace("pages","..");
}
module.exports=route;