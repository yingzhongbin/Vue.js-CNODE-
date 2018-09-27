<template>
    <div>
      <div>我是outter</div>
      <p>我是全局count：{{getCount}}</p>
    </div>
</template>

<script>
    export default {
        name: "outter",
        computed:{
          getCount(){
            return this.$store.state.count
          }
        }
    }
</script>

<style scoped>

</style>
