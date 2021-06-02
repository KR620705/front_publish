<template>
  <div class="auth select-user">
    <form>
      <fieldset>
        <legend>주/부사업자 선택</legend>

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

        <section class="wrap-login wrap-select-user">
          <div class="logo-small"></div>

          <!-- <div class="titlearea wrap-select-user">
            <h2 class="h2-title">활동하실 사용자를 선택해 주세요</h2>
          </div> -->
          <!-- 최초 가입시에만 보이는 타이틀 -->
          <div class="titlearea wrap-select-user">
            <h2 class="h2-title">사용자 선택</h2>
            <p>활동하실 사용자를 선택해 주세요</p>
          </div>
          <!-- //최초 가입시에만 보이는 타이틀 -->

          <div class="wrap-radio-group">
            <label class="male">
              <input type="radio" id="male" name="select_user" value="male">
              <span>빈센조</span>
            </label>
            <label class="female">
              <input type="radio" id="female" name="select_user" value="female">
              <span>박보영</span>
            </label>
          </div>
          <!-- 최초 가입시에만 보이는 문구 -->
          <p class="guide-select-user">
            사용자는 마이페이지에서 변경이 가능하며,<br> 선택된 사용자에 따라 추천 콘텐츠 내용이 달라집니다.
          </p>
          <!-- // 최초 가입시에만 보이는 문구 -->
          
        </section>
        <section class="wrap-bottom-btn">
          <!-- 
            선택완료 시 아래의 button 클래스 변경
            (회색 버튼에서 붉은색 버튼으로)
            class="btn gray" -> class="btn red"
          -->
          <button type="button" class="btn gray">다음</button>
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