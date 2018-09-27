<template>
  <div>
    我是子组件--- {{msg}}
    <button @click="sendMsg">我要给father发送数据</button>
    <p>我是全局count：{{getCount}}</p>
  </div>
</template>

<script>
    export default {
      name: "son",
      props:{
        msg:{
          type:String,
          default:"自己的信息"
        }
      },
      data(){
        return {
          sonMsg:"我是儿子发送的数据"
        }
      },
      methods:{
        sendMsg(){
          this.$emit("send",this.sonMsg)
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
