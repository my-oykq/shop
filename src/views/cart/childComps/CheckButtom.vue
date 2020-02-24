<template>
  <div>
    <!-- 图标,动态绑定class -->
    <div class="selector-item" :class="{checked:isChecked}">
      <img src="~/assets/img/cart/tick.svg" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      isChecked:{
        type:Boolean,
        default(){
          return false
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .selector-item
  /* 定位在原来的位置 */
    position relative
    width 18px
    height 18px
    margin 0
    border-radius 50%
    border 2px solid #cccccc
    cursor pointer
  .checked
    background-color var(--color-tint)
    border-color var(--color-tint)
</style>
