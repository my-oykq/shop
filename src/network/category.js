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
// 右边数据请求
export function getSubcategory(maitKey){
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}
