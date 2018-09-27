<template>
  <div>
    我是父组件
    <son :msg="fatherMsg" @send="getMsg"/>
    <br>-----{{sonMsg}}
    <p>我是全局count：{{getCount}}</p>
  </div>
</template>

<script>
  import son from './son'
    export default {
        name: "father",
        data(){
          return {
            fatherMsg:"我是父组件的信息",
            sonMsg:""
          }
        },
        components:{
          son
        },
        methods:{
          getMsg(value){
            this.sonMsg = value
          }
        },
      computed:{
          getCount(){
            return this.$store.state.count
          }
      }
    }
</script>

<style scoped>

</style>
