import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
  state: {
    count: 0
  },
  mutations:{
    // 只能同步
      increaseCount(state){
        state.count++
      },
      decreaseCount(state){
        state.count-=20
      }
  },
  actions:{
    // 可以是异步的
    decreaseCount(context){
      setTimeout(()=>{
        context.commit("decreaseCount")
    },1000)
    }
  },
  getters:{
    getPositiveCount(state){
      console.log(state.count);
      return state.count>0?state.count:0
    }
  }
})
