import
{
  ADD_COUTER,
  ADD_TOCART

} from './mutation-types'


// 直接修改state的状态
export default {
      //payload是接受actions传过来的参数,payload的数量自加
      [ADD_COUTER](state, payload){
         // 增加count += 1
        payload.count++
      },
      // 添加到商品到购物车中
     [ADD_TOCART](state,payload){
      //  添加属性---想product商品添加属性
        payload.checked = true
        state.cartList.push(payload)
      }
}
