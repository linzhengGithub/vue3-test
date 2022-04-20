
// import {
//   createRouter,
//   createWebHashHistory,
// } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
} from './grouter/index'
import Home from '../pages/home.vue'
import OpenDoor from '../components/OpenDoor/index.vue'
import testC from '../components/testC.vue'
// import tsTest from '../components/tsTest.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'Test',
    component: testC
  },
  {
    path: '/open_door',
    name: '开门时间录像',
    component: OpenDoor
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
