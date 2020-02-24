
/* 网络请求的封装 */


import axios from 'axios'
// config是在调用requst时url的信息
export function request(config){
  // 创建axios实例
  const instence = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/hy' || 'http://106.54.54.237:8000/api/hy',
    timeout:5000
  })

  // 1.请求拦截
  instence.interceptors.request.use(config=>{
    return config
  },err =>{
    console.log(err)
  })

  // 2.响应拦截
  instence.interceptors.response.use(res =>{
    return res
  }, err=>{
    console.log(err)
  })
/* // 3.真正发请求,本身instence返回一个promise，所以在当在调用requst方法的时候可以用.then和.catch来
  // 判断拿到数据的成功和失败 */
  return instence(config)
}
