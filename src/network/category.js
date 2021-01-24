/*
category的请求封装


*/

import {request} from './request'
// 左边数据请求
export function getCategory(){
  return request({
    url:'/category'
  })
}
// 右边数据请求top数据
export function getSubcategory(maitKey){
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
// // 右边数据请求bottom数据
export function getcategoryDeta(miniWallkey, type){
  return request({
    url:'/subcategory/detail',
    params:{
      miniWallkey,
      type
    }
  })
}
