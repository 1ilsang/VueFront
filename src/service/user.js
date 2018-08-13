import store from '../store/index';

export const logout = () => {
  store.commit('LOGOUT');
};
