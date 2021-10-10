import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/characters',
    name: 'Characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/characters/:id',
    name: 'CharacterDetails',
    component: () => import('../views/CharacterDetails.vue') 
  },
  {
    path: '*',
    redirect: '/characters'
  }
]

const router = new VueRouter({
  routes
})

export default router
