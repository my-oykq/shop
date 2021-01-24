// 间接修改state中 的状态,通过提交到mutations中修改
import
{
  ADD_COUTER,
  ADD_TOCART

} from './mutation-types'

export default{
  // 传过来参数，这里就负责接收参数，payload就是就收传过来的参数，用到state就要传state
  // 增加数量
  addCart( context , payload ){
    console.log(context , payload)
    return new Promise((resolve,reject)=>{
          // payload新添加商品
        // 第二种方案,断每个cartList的iid与新添加进来的payload.iid相等就把item赋值给oldProduct
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        // 判断oldProduct，如果oldProduct有值的话
        if(oldProduct){
          // 提交到mutations中
          context.commit(ADD_COUTER , oldProduct)
          resolve('当前数量+1')
        }else{
          // 如果oldProduct没有值的话，给payload增加count = 1
          payload.count = 1
          // 提交到mutations中
          context.commit(ADD_TOCART , payload)
          resolve('加入购物车成功')
        }
    })
  }
}
