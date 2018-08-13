import Vue from 'vue';
import store from '../store/index';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import RoomList from '@/components/RoomList';
import Agreement from '@/components/Agreement';
import NotFound404 from '@/components/NotFound404';

Vue.use(Router);

const requireAuth = () => (to, from, next) => {
  if (store.state.accessToken !== '') {
    return next();
  }
  next('/login');
};

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/agreement',
      name: Agreement,
      component: Agreement
    },
    {
      path: '/roomlist',
      name: 'RoomList',
      component: RoomList,
      beforeEnter: requireAuth()
    },
    {
      path: '*',
      name: 'NotFound404',
      component: NotFound404
    }
  ]
});
