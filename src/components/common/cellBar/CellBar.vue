<template>
<!-- 个人中心图像封装 -->
  <div class="cell-bar">
     <div class="left"><slot name="left"></slot>
     </div>
     <div class="center"><slot name="center"></slot>
     </div>
     <div class="right"><slot name="right"></slot>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"CellBar"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cell-bar
    display flex
    padding 15px 0 0 15px
    height 100px
    background-color var(--color-tint)
    border-bottom 2px solid #eee
    .left, .right
      width 70px
    .center
      flex 1
</style>
