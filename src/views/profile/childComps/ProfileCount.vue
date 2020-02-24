<template>
  <section class="profile-info">
     <div class="profile-count">
       <div class="number">
         <span class="balance">0.00</span>元
       </div>
       <div class="count-info">我的余额</div>
     </div>
     <div class="profile-count">
       <div class="number">
         <span class="balance">0</span>个
       </div>
       <div class="count-info">我的优惠</div>
     </div>
     <div class="profile-count">
       <div class="number">
         <span class="balance">0</span>分
       </div>
       <div class="count-info">我的积分</div>
     </div>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profile-info
    display flex
    border-bottom 8px solid #eee
    .profile-count
      width 100%
      color #666
      padding 24px
      text-align center
      margin-right 1px
      background-color #fff
      .balance
        color #ff5f3e
        font-size 24px
        font-weight 700
    .count-info
      font-size 16px
      margin-top 10px
</style>

