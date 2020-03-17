export default {
  // 用到state中的数据，所以传入state
  cartLength(state){
    // ---显示加入购物车的个数
    return state.cartList.length
  },
  // 加入购物车的列表,把公共的数据放在vuex中，getters也相当于计算属性
  cartList(state){
    return state.cartList
  }
}
