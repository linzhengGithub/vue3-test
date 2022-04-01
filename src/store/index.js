// import { createStore } from 'vuex'
import { createStore } from './gvuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    double(state) {
      console.log(state.count * 2)
      return state.count * 2
    }
  },
  mutations: { // 同步操作
    add(state) {
      state.count++
    }
  }
})

export default store