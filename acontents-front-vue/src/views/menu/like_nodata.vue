<template>
  <div class="menu like-nodata">

    <!-- 좋아요 nodata// -->
    <section class="nodata">
      <strong>좋아요 한 콘텐츠가 없습니다.</strong>
      <p>콘텐츠를 시청하시다가 ‘좋아요’를 하시면<br>이곳에서 좋아요 한 콘텐츠들만 모아서<br>보실 수 있습니다.</p>
    </section>
    <!-- //좋아요 nodata -->

  </div>
</template>

<script>
export default {
  name: 'Like_nodata',
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