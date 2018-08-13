<template>
  <div id="container">
    <img class="fade-img" src="../assets/test.jpg" alt="first image" >
    <img class="fade-img" src="../assets/1.jpg" alt="first image" >
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome Box'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {
  width: 100%;
}
.fade-img{
  animation: fadeImg 1.5s;
}
@keyframes fadeImg {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
div{
  margin: 0;
}
img{
  width: 100%;
  display:block;
}
</style>
