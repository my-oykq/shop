/* 所有对首页数据的请求，在home.js文件中，调用requst时就可以用.then和.catch来判断数据的成功和失败
1.好处，在这个封装请求，把首页的所有请求都防弹一个单独文件中，统一管理

*/
// 1.导入文件
import {request} from './request'
export function getHomeMulidata(){
  return request({
    // 传入的config配置信息
    url:'/home/multidata',
    // method:'post'
  })
}


// 请求商品列表的
// ----/home/data?type=pop/new/sell&page=1,所以传入type指的是pop/new/sell类型，page
export function getHomeGoods(type, page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })
}



