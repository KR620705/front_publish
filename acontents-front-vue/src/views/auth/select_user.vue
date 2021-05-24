<template>
  <div class="auth select-user">
    <form>
      <fieldset>
        <legend>로그인</legend>

        <section class="wrap-login">
          <div class="logo-small"></div>

          <div class="titlearea wrap-select-user">
            <h2 class="h2-title">사용자선택</h2>
            <p>활동하실 사용자를 선택해 주세요</p>
          </div>

          <div class="wrap-checkbox-user">

            <label class="male">
              <input type="radio" id="male" name="select_user" value="male">
              <span></span>
              <p>빈센조</p>
            </label>
            <label class="female">
              <input type="radio" id="female" name="select_user" value="female">
              <span></span>
              <p>박보영</p>
            </label>

          </div>
        </section>

      </fieldset>
    </form>

    <section></section>
    <section></section>
    <section></section>
<!-- 
  시안은 푸터가 표현돠이 있어, 
  푸터가 보여져야 합니다.(헤더는 없어도 됨)
 -->
  </div>
</template>

<script>
export default {
  name: 'Select_user',
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