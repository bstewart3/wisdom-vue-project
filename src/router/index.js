import { createRouter, createWebHashHistory } from 'vue-router';
import AddWisdom from '../pages/AddWisdom.vue';
import GetWisdom from '../pages/GetWisdom.vue';
import NotFound from '../pages/NotFound.vue';
import WisdomDetails from '../pages/WisdomDetails.vue';
import UserAuth from '../pages/auth/UserAuth.vue';
import LandingPage from '../pages/LandingPage.vue';
import store from '../store/index.js' ;

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
    path: '/home',
    component: LandingPage
  }, 
  {
    path: '/addwisdom',
    component: AddWisdom,
    meta: { requiresAuth: true }
  },
  {
    path: '/:notFound(.*)',
    component: NotFound
  },
  {
    path: '/auth',
    component: UserAuth,
    meta: { requiresUnauth: true
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(function(to,_,next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated ) {
      next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/wisdoms')
  } else {
    next()
  }
})

export default router
