<template>
  <div class="search search_result_nodata">
    
    <section class="wrap_input">
        <button type="button" class="btn-search-close">닫기</button>
        <input type="text" class="search-input" placeholder="검색어를 입력하세요">
    </section>

    <section class="search-result">

      <div class="search-result-text">
        <h3 class="h3-title">검색 결과가 없습니다.</h3>
        <p>
          하단의 추천 해시태그를 통해서<br>
          다른 콘텐츠들도 찾아보세요.
        </p>
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
  name: 'Search_result_nodata',
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