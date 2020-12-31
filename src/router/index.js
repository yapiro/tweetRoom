import Vue from 'vue'
import VueRouter from 'vue-router'
import Wisky from '../views/Wisky.vue';
import Trip from '../views/Trip.vue';
import Muscle from '../views/Muscle.vue';


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Wisky',
    component:Wisky,
  },
  {
    path:'/trip',
    name:'Trip',
    component:Trip,
  },
  {
    path:'/muscle',
    name:'Muscle',
    component:Muscle,
  },
]

const router = new VueRouter({
  routes
})

export default router
