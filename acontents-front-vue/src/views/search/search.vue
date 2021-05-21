<template>
  <div class="search search">
    
    <section class="wrap-input">
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
        <div class="wrap-relation">
            <!-- 
              최근 검색어 none 클래스 제거
              EX) wrap-relation -> 최근 검색어 보임
                  wrap-relation none -> 최근 검색어 안 보임
            -->
          <div class="word">
             <input type="text" class="search-input" placeholder="검색어를 입력하세요">
             <dv class="wrap_latest">
                <h2 class="h2-title">최근 검색어</h2>
                <ul>
                  <li>
                    <a href="javascript:void(0)">은퇴 후 자산관리</a>
                    <button type="button" class="btn-del-word-small">삭제</button>
                  </li>
                  <li>
                    <a href="javascript:void(0)">김남길 리더님</a>
                    <button type="button" class="btn-del-word-small">삭제</button>  
                  </li>
                  <li>
                    <a href="javascript:void(0)">건강</a>
                    <button type="button" class="btn-del-word-small">삭제</button>  
                  </li>
                </ul>
             </dv>
             <button type="button" class="btn-del-word">전체삭제</button>
          </div>
          <button type="button" class="btn-close"></button>
        </div>

    </section>

    <section class="recommand-word">
      <div class="titlearea">
				<h2 class="h2-title">추천 검색어</h2>
			</div>
      <ul>
        <li><a href="javascript:void(0)">은퇴 후 자산관리</a></li>
        <li><a href="javascript:void(0)">건강라디오</a></li>
        <li><a href="javascript:void(0)">김남길 리더님</a></li>
        <li><a href="javascript:void(0)">장수비법</a></li>
        <li><a href="javascript:void(0)">브랜드 캠페인</a></li>
        <li><a href="javascript:void(0)">암웨이 브랜드</a></li>
        <li><a href="javascript:void(0)">디지털 삼총사</a></li>
        <li><a href="javascript:void(0)">나만의 감성</a></li>
        <li><a href="javascript:void(0)">나의 성공기</a></li>
      </ul>
    </section>

		<section class="tag-list recommand">
			<div class="titlearea">
				<h2 class="h2-title">최근 HOT한 태그 #</h2>
			</div>
			<ul class="tag type-circle">
				<li><a href="javascript:void(0)">#감성</a></li>
				<li><a href="javascript:void(0)">#노력</a></li>
				<li><a href="javascript:void(0)">#암웨이</a></li>
				<li><a href="javascript:void(0)">#장수비법</a></li>
				<li><a href="javascript:void(0)">#운동</a></li>
				<li><a href="javascript:void(0)">#건강라디오</a></li>
				<li><a href="javascript:void(0)">#노인</a></li>
				<li><a href="javascript:void(0)">#브랜드캠페인</a></li>
				<li><a href="javascript:void(0)">#영양소</a></li>
				<li><a href="javascript:void(0)">#다이어트</a></li>
			</ul>
		</section>


  </div>
</template>

<script>
export default {
  name: 'Search',
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