<template>
  <div class="param_info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, index) in table" :key="index" class="param_tr">
        <td v-for="(td, index) in tr" :key="index">{{td}}</td>
      </tr>
    </table>
    <table class="param_key">
      <tr v-for="(info, index) in paramInfo.infos" :key="'param_tr-'+index" class="param_tr">
        <td class="info_key">{{info.key}}</td>
        <td class="info_value">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name:"DetailParamInfo",
    props:{
      // 接受父组件穿肚过来的参数
      paramInfo:{
         type:Object,
         default(){
           return {}
         }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .param_info
    padding 20px 15px
    font-size 14px
    border-bottom 5px solid #f2f5f8
    .info-size
      width 100%
      border-bottom 4px solid #f2f5f8
      border-collapse: collapse
      .param_tr
        height 42px
        line-height 42px
        margin-top 5px
      .param_tr>td
         border-bottom 1px solid rgba(100,100,100,.1)
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    .param_key
       width 100%
       text-align center
       border-collapse: collapse

       .param_tr>td
          height 42px
          line-height 42px
          border-bottom 1px solid rgba(100,100,100,.1)
       .info_value
          color #eb4868
</style>
