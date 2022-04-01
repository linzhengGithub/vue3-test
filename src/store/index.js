import { createStore } from 'vuex'
// import { createStore } from './gvuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: { // 相当于计算属性computer
    double(state) {
      return state.count * 2
    }
  },
  mutations: { // 同步修改数据操作
    add(state) {
      state.count++
    }
  },
  actions: { // 异步修改数据通过 mutations 操作
    asyncAdd({commit}) {
      setTimeout(() => {
        commit('add')
      },1000)
    }
  }
})

export default store