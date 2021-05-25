<template>
  <div class="auth terms">
    <form>
      <fieldset>
        <legend>서비스 약관동의</legend>

        <section class="wrap-login">
          <div class="logo-small"></div>

          <div class="titlearea wrap-select-user">
            <h2 class="h2-title">활동하실 사용자를 선택해 주세요</h2>
          </div>


        </section>

        
        <!-- 카테고리 선택 후 버튼의 클래스가 btn red -> btn red fh 로 변경이 되어야 함. -->
        <button type="button" class="btn gray">저장</button>

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