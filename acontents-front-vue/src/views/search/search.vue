<template>
  <div class="search search">
    
    <section class="wrap_input">
        <button type="button" class="btn-search-close">닫기</button>
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
    </section>

    <section class="recommand-word">
      <div class="titlearea">
				<h2 class="h2-title">추천 검색어</h2>
			</div>
      <div class="recommand_word">
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
      </div>
    </section>

		<section class="tag-list recommand">
			<div class="titlearea">
				<h2 class="h2-title">최근 HOT한 태그 #</h2>
			</div>
			<ul class="tag type-circle">
				<li><a href="javascript:;">#감성</a></li>
				<li><a href="javascript:;">#노력</a></li>
				<li><a href="javascript:;">#암웨이</a></li>
				<li><a href="javascript:;">#장수비법</a></li>
				<li><a href="javascript:;">#운동</a></li>
				<li><a href="javascript:;">#건강라디오</a></li>
				<li><a href="javascript:;">#노인</a></li>
				<li><a href="javascript:;">#브랜드캠페인</a></li>
				<li><a href="javascript:;">#영양소</a></li>
				<li><a href="javascript:;">#다이어트</a></li>
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