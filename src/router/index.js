import { createRouter, createWebHashHistory } from 'vue-router'
import AddWisdom from '../pages/AddWisdom.vue'
import GetWisdom from '../pages/GetWisdom.vue'
import NotFound from '../pages/NotFound.vue'
import WisdomDetails from '../pages/WisdomDetails.vue'

const routes = [
  {
    path: '/',
    redirect:'/wisdoms' 
  },
  {
    path: '/wisdoms',
    component: GetWisdom
  },
  {
    path: '/wisdoms/:id',
    props: true,
    component: WisdomDetails
  }, 
  {
    path: '/addwisdom',
    component: AddWisdom
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
