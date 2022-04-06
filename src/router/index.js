
// import {
//   createRouter,
//   createWebHashHistory,
// } from 'vue-router'
import {
  createRouter,
  createWebHashHistory,
} from './grouter/index'
import Home from '../pages/home.vue'
import About from '../pages/about.vue'
import testC from '../components/testC.vue'
import tsTest from '../components/tsTest.vue'


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
    path: '/about',
    name: 'About',
    component: tsTest
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
