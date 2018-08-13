<template>
  <div></div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: 'Agreement',
  methods: {
    ...mapMutations([
      'SETACCESSTOKEN',
      'SETNICKNAME'
    ])
  },
  created () {
    //  TODO AccessToken 해석해서 데이터 저장하는 식으로 바꾸자.
    //  TODO LocalsStorage 에 저장필요.
    this.$store.commit('SETACCESSTOKEN', this.$route.query.token);
    this.$store.commit('SETNICKNAME', this.$route.query.nickName);
    this.$router.push('/');
  }
};
</script>
