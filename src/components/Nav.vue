<template>
  <div id="container">
    <div id="main-tab">
      <router-link to="/">
        <img src="../assets/logo.png" width="30px" alt="logo" />
        <div id="logo-tab">
          toyProject :: Web Tetris Site
        </div>
      </router-link>
      <div id="social-tab">
        친구 / 쪽지 / 알림
      </div>
      <div id="login-tab">
        <div v-if="nickName" @click="logout()">
          로그아웃
        </div>
        <div v-else>
          <router-link to="login">로그인</router-link>
        </div>
      </div>
      <div id="game-start-tab">
        <router-link to="roomlist">게임하기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { logout } from '../service/user';

export default {
  name: 'Nav',
  computed: {
    ...mapState([
      'nickName'
    ])
  },
  methods: {
    logout () {
      logout();
    }
  }
};
</script>

<style scoped>
#container {
  background-color: #20232a;
  color: white;
  width: 100%;
  position: fixed;
  top: 0px;
  height: 55px;
  z-index: 1;
}
#logo-tab, #social-tab, #login-tab, #game-start-tab {
  display: inline-block;
  margin-left: 10px;
}
#logo-tab:hover {
  color: #61dafb;
}
#social-tab {
  margin-left: 40%;
}
#login-tab {
  background-color: gray;
  padding: 5px;
}
#login-tab:hover {
  background-color: deepskyblue;
  padding-bottom: 10px;
  padding-top:10px;
}
#game-start-tab {
  background-color: gray;
  padding: 5px;
}

#game-start-tab:hover {
  background-color: deepskyblue;
  padding-bottom: 10px;
  padding-top:10px;
}

a {
  color: white;
  text-decoration-line: none;
}
</style>
