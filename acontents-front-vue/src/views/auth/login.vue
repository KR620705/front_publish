<template>
  <div class="auth login">
    <form>
      <fieldset>
        <legend>로그인</legend>

        <section class="wrap-login">
          <div class="logo-small"></div>
          <div class="logo"></div>
          <div class="wrap-input">
            <input type="text" class="" placeholder="ABO번호 / Member ID">
            <input type="password" id="password" class="" placeholder="비밀번호">
          </div>

          <div class="wrap-checkbox">
            <label>
              <input type="checkbox" >
              <span>아이디저장</span>
            </label>
            <label>
              <input type="checkbox" >
              <span>로그인 상태 유지</span>
            </label>
          </div>
          <button type="button" class="btn red">로그인</button>
          <div class="other-auth-link">
            <ul>
              <li>
                <a href="/" target="_blank" class="btn">
                  <span>아이디 찾기</span>
                </a>
              </li>
              <li>
                <a href="/" target="_blank" class="btn">
                  <span>비밀번호 찾기</span>
                </a>
              </li>
              <li>
                <router-link to="/agree" class="btn">
                  <span>회원가입</span>
                </router-link>
              </li>
            </ul>
          </div>

        </section>

        <section class="wrap-caution">
          <p>
            본 서비스는 한국암웨이 ABO 및 멤버들을 위한 서비스입니다.
          </p>
        </section>

      </fieldset>
    </form>
<!-- 
  시안은 푸터가 표현돠이 있어, 
  푸터가 보여져야 합니다.(헤더는 없어도 됨)
 -->
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