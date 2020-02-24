<template>
  <div id="list">
    <div class="list-data">
        <a href="#" class="my-order">
          <div class="item">
              <i class="iconfont icon-wodegouwuche"></i>
              <span>我的购物车</span>
          </div>
        </a>
        <a href="#" class="my-order">
          <div class="item">
            <i class="iconfont icon-icon-test"></i>
            <span>下载购物App</span>
          </div>
        </a>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"List2View"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .list-data
    display flex
    margin-top 10px
    flex-direction column
    .my-order
      color #333
      padding-left 15px
      border-bottom 1px solid #f1f1f1
      .item
        height 44px
        line-height 44px
        .iconfont
          margin-left 8px
          font-size 22px
        .icon-wodegouwuche
          color #ff5777
        .icon-icon-test
          color #ff8198
      .item>span
         padding-left 18px
</style>
