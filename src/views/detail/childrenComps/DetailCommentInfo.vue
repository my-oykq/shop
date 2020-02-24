<template>
<!-- 用户评论 -->
  <div class="comment_info">
    <div class="comment_header">
      <div class="comment">用户评论</div>
      <div class="more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <!-- 异步的数据是先显示vuex中的初始数据，然后显示请求数据，刚开始vuex中state中的初始数据为空，所以页面在显示初始数据的时候报错-用v-if判断 -->
    <div class="info_user" v-if="commentInfo.user">
      <img :src="commentInfo.user.avatar" alt="" class="user_img">
      <span class="user_uname">{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment_desc">
      <p class="comment_detail">{{commentInfo.content}}</p>
      <div class="comment_other">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="comment_imgs">
        <img :src="item" alt="" v-for="(item, index) in commentInfo.images" :key="index" class="images">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import {formatDate} from "@/common/utils";
  export default {
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      // value代表着时间戳：15389033122，转化为：年-月-日
      showDate(value){
        // 将时间戳转换为date对象 * 毫秒
        let date = new Date(value*1000);
        /* (date，格式化) 2020年-02月-22日*/
        return formatDate(date, 'yyyy-MM-dd')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .comment_info
    padding 5px 12px
    color #333
    border-bottom 5px solid #f2f5f8
    .comment_header
       height 50px
       line-height 50px
       display flex
       border-bottom 2px solid #f2f5f8
       .comment
         flex 1
       .more
          margin-right 10px
    .info_user
    /* 上：10 左右：0 下：5 */
      padding 10px 0 5px
      .user_img
      /* 图片必须给 */
        width 42px
        height 42px
        border-radius 50%
      .user_uname
       position relative
       margin-left 10px
       top -15px
    .comment_desc
      padding 0 5px 15px
      .comment_detail
        color #777
        font-size 14px
        line-height 1.5
      .comment_other
        color #999
        font-size 12px
        margin-top 10px
        .date
          margin-right 8px
      .comment_imgs
        margin-top 10px
        .images
          width 70px
          height 70px
          margin-right 5px
</style>
