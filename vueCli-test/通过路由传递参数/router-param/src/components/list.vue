<template>
    <ul>
      <li>
        <router-link :to="{name:'HelloWorld',params:{msg:'helloWorld'}}">hello</router-link>
      </li>
      <li>
        <router-link :to="{name:'FuckWorld',params:{msg:'fuckWorld'}}">fuck</router-link>
      </li>
      <li>
        <router-link
          :to="{path: '/helloSb',query:{msg: 'sb 你好'}}"> HELLO WORLD
        </router-link>
      </li>
    </ul>
</template>

<script>

    export default {
        name: "list"
    }
</script>

<style scoped>

</style>
