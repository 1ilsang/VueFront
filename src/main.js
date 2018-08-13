// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store/index';
import App from './App';
import axios from 'axios';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
