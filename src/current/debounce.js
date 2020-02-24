/* 函数防抖

                          函数，延迟时间*/
// export function debounce(func, delay){
//   let timer = null
// /* ...以为着传参数的时候可以传多个 */
//   return function(...args){
//     /*1. 判断有没有定时器清除定时器，没有就不走 */
//     if(timer)clearTimeout(timer)
//     /*2.走这一步 重置定时器 */
//     timer = setInterval(()=>{
//       func.apply(this,args)
//     },delay)
//   }
// }

export function debounce (func,delay=300) {
  let timer = null;
  return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(()=>{
          func.apply(this,args)
      },delay)
  }
}

