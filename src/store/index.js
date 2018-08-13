import { SETACCESSTOKEN, SETNICKNAME, LOGOUT } from './mutation-type';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accessToken: '',
    nickName: ''
  },
  getters: {
    getAccessToken: state => {
      return state.accessToken;
    }
  },
  mutations: {
    [SETACCESSTOKEN] (state, payload) {
      state.accessToken = payload;
    },
    [SETNICKNAME] (state, payload) {
      state.nickName = payload;
    },
    [LOGOUT] (state) {
      state.accessToken = '';
      state.nickName = '';
    }
  },
  actions: {

  }
});
