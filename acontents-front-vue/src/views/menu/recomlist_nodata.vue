<template>
  <div class="menu recomlist-nodata">

	<!-- 맞춤추천 nodata// -->
	<section class="nodata">
		<strong>맞춤추천 콘텐츠가 없습니다.</strong>
		<p>선호 카테고리에 따라 다양한 콘텐츠가 맞춤으로 추천되니,<br>선호 카테고리를 변경해 보세요</p>
		<a href="javascript:;" class="btn round">선호 카테고리 변경</a>
	</section>
	<!-- //맞춤추천 nodata -->

  </div>
</template>

<script>
export default {
  name: 'Recomlist_nodata',
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