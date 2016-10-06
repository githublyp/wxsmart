/*
页面路由
*/
var route={
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
};
/*
获取路径
*/
route.getUrl=function(name){
    return (this[name]||this['404']).path.replace("pages","..");
}
module.exports=route;