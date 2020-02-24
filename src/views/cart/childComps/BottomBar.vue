<template>
<!--底部 -->
  <div class="bottom-menu">
    <CheckButtom class="select-all" :is-checked="isSelectAll" @click.native="checkClick"/>
    <span>全选</span>
    <div class="bottom-price">合计: {{totalPrice}}</div>
    <div class="buy-product" @click="buyClick">去计算({{checkLength}})</div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import CheckButtom from './CheckButtom'
  export default {
    components:{
      CheckButtom
    },
    computed:{
      // 就能拿到state中cartList
      ...mapGetters(['cartList']),
      // 合计
      totalPrice(){
        // 只要是选中的商品都可以做一个合计，用filter过滤拿到总的价格,toFixed(2)保留两位小数
        return '￥' + this.cartList.filter(item =>{
          return item.checked
        }).reduce((preValue, item) =>{
          return preValue + item.price * item.count
        },0).toFixed(2)
      },


      checkLength(){
        // 选中的长度，选中有几个，就可以直接通过this.cartList拿到state中cartList
        return this.cartList.filter(item => item.checked).length
      },
      // 全选的判断
      isSelectAll(){
        //2.当cartList的长度为0（也就是说没有商品），那么全选就是false
        if(this.cartList.length == 0){
          return false
        }
        // 1.只要cartList的商品有一个不是选中的情况下那么全选就为：false
       return !this.cartList.find(item => !item.checked)
      }
    },

    methods: {
      // 点击全选
      checkClick(){
        if(this.isSelectAll){//如果全部选中
        // 点击里边的每一个商品都是选中状态：checked:false
          this.cartList.forEach(item => item.checked = false)
        }else{//如果部分或全部都不选中
        // 每一个商品的点击状态是，checked:true
          this.cartList.forEach(item => item.checked = true)
        }
      },
      buyClick(){
         if(!this.isSelectAll){//如果没有全选的话旧电机 去计算
            this.$toast.show('请选择购买的商品', 2000)
         }

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .bottom-menu
    width 100%
    height 44px
    background #eeeeee
    position fixed
    bottom 50px
    display flex
    justify-content center
    align-items center
    font-size 14px
    box-shadow 0 -2px 3px rgba(0, 0, 0, .2)
  .bottom-menu>span
    margin-left 40px

  .select-all
    position absolute
    left 12px
    top 13px
  .bottom-price
      flex 1
      margin-left 10px
  .buy-product
    width 100px
    background orangered
    height 44px
    color #fff
    line-height 44px
    text-align center
</style>
