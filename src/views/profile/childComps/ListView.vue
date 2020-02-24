<template>
  <div id="list">
    <div class="list-data">
        <a href="#" class="my-order">
          <div class="item">
              <i class="iconfont icon-order"></i>
              <span>我的消息</span>
          </div>
        </a>
        <a href="#" class="my-order">
          <div class="item">
            <i class="iconfont icon-cheng-"></i>
            <span>积分商城</span>
          </div>
        </a>
        <a href="#" class="my-order">
          <div class="item">
            <i class="iconfont icon-vip"></i>
            <span>会员卡</span>
          </div>
        </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"ListView"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .list-data
    display flex
    margin-top 5px
    flex-direction column
    .my-order
      padding-left 15px
      border-bottom 1px solid #f1f1f1
      .item
        height 44px
        line-height 44px
        .iconfont
          margin-left 8px
          font-size 22px
        .icon-cheng-
          color #ff5f3e
        .icon-vip
          color #f90
      .item>span
         padding-left 18px
</style>
