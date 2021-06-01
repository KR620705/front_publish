<template>
  <div class="auth login">
    <form>
      <fieldset>
        <legend>로그인</legend>

        <section>
          <div class="header type-sub">
            <div class="inner">
              <div class="logo-list">
                <ul>
                  <li class="acontent"><h1><a href="javascript:;"><span class="hide">A Content</span></a></h1></li>
                  <li class="amway"><a href="javascript:;" target="_blank" title="새창으로 열림"><span class="hide">Amway</span></a></li>
                </ul>
                <button type="button" class="btn-open"></button>
              </div>
              <button type="button" class="btn-search">검색</button>
              <button type="button" class="btn-menu">메뉴</button>
            </div>
          </div>
        </section>

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
  푸터가 보여져야 합니다.
  (PC버전에서는 헤더가 다른 서브페이지와 동일하게 변경 되어야 합니다.)
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