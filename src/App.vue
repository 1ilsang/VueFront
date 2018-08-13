<template>
  <div id="app">
    <Modal v-if="modalToggle"></Modal>
    <Nav/>
    <SubNav/>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav';
import Modal from './components/TetrisModal';
import SubNav from './components/SubNav';

export default {
  name: 'App',
  components: {
    Nav,
    Footer: () => import('./components/Footer'),
    Modal,
    SubNav
  },
  data () {
    return {
      modalToggle: false,
      routerKey: false
    };
  },
  created () {
    this.$EventBus.$on('close', () => {
      this.modalToggle = false;
    });
    this.$EventBus.$on('open', () => {
      this.modalToggle = true;
    });
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0 !important;
  padding: 0 !important;
}
body::-webkit-scrollbar {
  display: none;
}
</style>
