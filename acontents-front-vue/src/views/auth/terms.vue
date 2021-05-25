<template>
  <div class="auth terms">
    <form>
      <fieldset>
        <legend>서비스 약관동의</legend>

        <section class="wrap-login">
          <div class="logo-small"></div>

          <div class="titlearea tit-terms">
            <h2 class="h2-title">A-Content<br>서비스 약관에 동의해 주세요.</h2>
          </div>

          <div class="wrap-terms">
                  <div class="all-check">
                    <label>
                      <input type="checkbox" checked>
                      <span>전체동의하기</span>
                    </label>
                  </div>
                  <div class="each-check">
                    <label>
                      <input type="checkbox">
                      <span>[필수] 개인정보 제공 동의</span>
                    </label>
                    <textarea class="terms-text" readonly>약관내용</textarea>
                  </div>
                  <div class="each-check">
                    <label>
                      <input type="checkbox">
                      <span>[필수] 개인정보 제공 동의</span>
                      <textarea class="terms-text" readonly>약관내용</textarea>
                    </label>
                  </div>
          </div>

        </section>
    
        <!-- 카테고리 선택 후 버튼의 클래스가 btn red ->  btn red 로 변경이 되어야 함. -->
        <button type="button" class="btn gray">다음</button>

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
  name: 'Terms',
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