<template>
  <div id="container">
      <ul id="list">
        <li v-for="a in 25" :key="a">
          <label @click="openRoom()">Room Number : {{a}}</label>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'RoomList',
  methods: {
    openRoom () {
      this.$EventBus.$emit('open');
    }
  },
  created () {
    window.onkeydown = function (event) {
      if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40 || event.keyCode === 32) {
        event.preventDefault();
      }
    };
    // TODO https://kr.vuejs.org/v2/guide/transitions.html 리스트 무작위 섞기
  }
};
</script>

<style scoped>
#list {
  margin-left: 35%;
  margin-right: 35%;
}
label {
  text-decoration-line: underline;
}
label:hover{
  color: red;
}
li {
  margin: 15px;
}
</style>
