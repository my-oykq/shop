<template>
  <div>
     <cell-bar>
       <!-- 左边图像 -->
         <div slot="left" class="user-iamge">
           <img src="~assets/img/home/home.jpg" alt="">
         </div>
         <!-- 中间内容 -->
         <div slot="center" class="user-icon">
           <div>登录/注册</div>
           <div class="icon">
             <i class="iconfont icon-shouji"></i>
             <span>暂无绑定手机号</span>
           </div>
         </div>
         <!-- 右边 -->
         <div slot="right" class="arrow">
           <i class="iconfont icon-sanjiao-r"></i>
         </div>
      </cell-bar>
  </div>
</template>

<script type="text/ecmascript-6">
import CellBar from 'components/common/cellBar/CellBar'
  export default {
    name:"UserInfo",
    components:{
      CellBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .user-iamge
    display flex
  .user-iamge>img
    width 70px
    height 70px
    border-radius 50%
    background-color #fff
  .user-icon
    margin 20px 0 0 20px
    color #fff
    .icon
      margin-top 10px
  .arrow
    width 30px
    height 20px
    color #fff
    margin 20px 20px 0 30px
    .iconfont
      width 11px
      height 22px
      font-size 30px

</style>
