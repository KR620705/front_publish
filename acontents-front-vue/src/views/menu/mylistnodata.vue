<template>
  <div class="menu mylist">

	<!-- 즐겨찾기 nodata// -->
	<section class="nodata">
		<strong>즐겨찾기 한 콘텐츠가 없습니다.</strong>
		<p>콘텐츠를 시청하시다가 ‘즐겨찾기’를 해두시면 이곳에서 언제든 다시 보실 수 있습니다.</p>
	</section>
	<!-- //nodata -->

	<!-- 좋아요 nodata// -->
	<section class="nodata">
		<strong>좋아요 한 콘텐츠가 없습니다.</strong>
		<p>콘텐츠를 시청하시다가 ‘좋아요’를 하시면 이곳에서 좋아요 한 콘텐츠들만 모아서 보실 수 있습니다.</p>
	</section>
	<!-- //nodata -->

  </div>
</template>

<script>
export default {
  name: 'Mylistnodata',
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