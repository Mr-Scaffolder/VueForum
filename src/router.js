import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './components/Welcome.vue'
import Home from './components/Home.vue'
import ShowThread from './components/ShowThread.vue';
import Profile from './components/Profile.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:'welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    
    },
    {
      path:'/thread/:slug',
      name:'show-thread',
      component:ShowThread

    },
    {
      path:'/profile/:slug',
      name:'profile',
      component:Profile

    }
  ],
  mode:'history'
})
