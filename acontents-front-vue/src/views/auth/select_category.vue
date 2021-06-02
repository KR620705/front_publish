<template>
  <div class="auth select-category">
    <form>
      <fieldset>
        <legend>선호 카테고리 선택</legend>

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

          <!-- 최초 가입시에만 보이는 타이틀 -->
          <div class="titlearea wrap-select-category-title">
            <h2 class="h2-title">선호 카테고리 선택</h2>
            <p>선호하시는 카테고리를 <b>최대5개</b>까지 선택해 주세요.</p>
          </div>
          <!-- //최초 가입시에만 보이는 타이틀 -->


        </section>

        <section class="check-group">
          <h2 class="h2-title">어바웃 암웨이</h2>
          <div class="wrap-checkbox-array">
            <ul class="checkbox-array">
              <li><input type="checkbox" id="check1-1" value="" checked><label for="check1-1">암웨이 NOW</label></li>
              <li><input type="checkbox" id="check1-2" value=""><label for="check1-2">암웨이 해리티지</label></li>
            </ul>
          </div>
        </section>
        <section class="check-group">
          <h2 class="h2-title">브랜드</h2>
          <div class="wrap-checkbox-array">
            <ul class="checkbox-array">
              <li><input type="checkbox" id="check2-1" value="" checked><label for="check2-1">2-1</label></li>
              <li><input type="checkbox" id="check2-2" value=""><label for="check2-2">2-2</label></li>
              <li><input type="checkbox" id="check2-3" value=""><label for="check2-3">엣모스키어스카이</label></li>
              <li><input type="checkbox" id="check2-4" value=""><label for="check2-4">2-4</label></li>
              <li><input type="checkbox" id="check2-5" value=""><label for="check2-5">2-5</label></li>
              <li><input type="checkbox" id="check2-6" value=""><label for="check2-6">2-6</label></li>
            </ul>
          </div>
        </section>
        <section class="check-group">
          <h2 class="h2-title">라이브러리</h2>
          <div class="wrap-checkbox-array">
            <ul class="checkbox-array">
              <li><input type="checkbox" id="check3-1" value="" checked><label for="check3-1">3-1</label></li>
              <li><input type="checkbox" id="check3-2" value=""><label for="check3-2">3-2</label></li>
            </ul>
          </div>
        </section>
        
        <section class="wrap-bottom-btn">
          <!-- 
            선택완료 시 아래의 button 클래스 변경
            (회색 버튼에서 붉은색 버튼으로)
            class="btn gray" -> class="btn red"
          -->
          <button type="button" class="btn gray">저장</button>
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
  name: 'Select_category',
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