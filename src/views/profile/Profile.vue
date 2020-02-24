<template>
  <div class="profile">
    <nav-bar class="profil-nav"><div slot="center">我的</div></nav-bar>
    <user-info/>
    <profile-count/>
    <list-view class="list-data"></list-view>
    <list2-view class="list-data"></list2-view>
  </div>
</template>

<script type="text/ecmascript-6">
import UserInfo from './childComps/UserInfo'
import ProfileCount from './childComps/ProfileCount'
import ListView from './childComps/ListView'
import List2View from './childComps/List2View'
import NavBar from 'components/common/navBar/NavBar'
  export default {
    components:{
      UserInfo,
      NavBar,
      ProfileCount,
      ListView,
      List2View
    },
    data () {
      return {
        // orderList:[
        //   {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
        //   {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
        //   {icon: '#vip', iconColor: '#ffc636', info: '会员卡'}
        // ],
        // serviceList:[
        //   {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
        //   {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'}
        // ]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profile
    background-color #eeeeee
    border-bottom 8px style color
    .profil-nav
      background-color var(--color-tint)
      color #fff
    .list-data
      background: #fff
</style>
