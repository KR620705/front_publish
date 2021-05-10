<template>
  <div class="auth">
    <div>
      <router-link to="/home" class="btn">
        <span>로그인</span>
      </router-link>
    </div>

    <div>
      <a href="/" target="_blank" class="btn">
        <span>아이디 찾기</span>
      </a>

      <a href="/" target="_blank" class="btn">
        <span>비밀번호 찾기</span>
      </a>

      <router-link to="/agree" class="btn">
        <span>회원가입</span>
      </router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {

    }
  },
  mounted() {
    // page start !!
    sessionStorage.clear();

  },
  methods:{

  },
}
</script>
<style scoped>
  
</style>