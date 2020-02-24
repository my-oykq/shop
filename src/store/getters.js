export default {
  // 用到state中的数据，所以传入state
  cartLength(state){
    // ---显示加入购物车的个数
    return state.cartList.length
  },
  // 加入购物车的列表
  cartList(state){
    return state.cartList
  }
}
