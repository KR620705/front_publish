<template>
  <div class="menu mylist-nodata">

    <!-- 즐겨찾기 nodata// -->
    <section class="nodata">
      <strong>즐겨찾기 한 콘텐츠가 없습니다.</strong>
      <p>콘텐츠를 시청하시다가 ‘즐겨찾기’를 해두시면<br>이곳에서 언제든 다시 보실 수 있습니다.</p>
    </section>
    <!-- //즐겨찾기 nodata -->

  </div>
</template>

<script>
export default {
  name: 'Mylist_nodata',
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