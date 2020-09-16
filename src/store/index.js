import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    points:[],
    passed:0,                           //及格线
    pointSize:30,                       //点大小
    configShowLineLast:3,               //配置项，保留最后三条线


  },
  // mutations 调用方式 this.$store.commit('clearLineData',data)
  mutations: {
    //添加画布点数据
    addLineData(state,data){
      state.points.unshift(data)
    },
    //清空画布点数据
    clearLineData(state){
      state.points = []
      state.passed = 0
    }
  },
  // actions  调用方式 this.$store.dispatch('clearLineData',data)
  actions: { 
    //添加画布点数据
    addLineData (context,data) {
      context.commit('addLineData',data)
    },
    //清空画布点数据
    clearLineData (context) {
      context.commit('clearLineData')
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
