<template>

  <!-- 상세 헤더// -->
  <header class="header"><!-- scroll시 fixed 클래스 추가 -->
    <div class="inner">
      <h1 class="hide">A Content</h1>
      <button type="button" class="btn-prev">이전</button>
      <button type="button" class="btn-search">검색</button>
      <button type="button" class="btn-menu">메뉴</button>
    </div>
  </header>
  <!-- //상세 헤더 -->

</template>

<script>
export default {
  components: {

  },
  data: function () {
    return {
      username: '',
    }
  },
  mounted() {

  },
  methods:{
    toggleAsideOpener() {
      const Is = !this.$store.state.isAsideOpen;
      this.$store.dispatch('commitIsAsideOpen', {value: Is});
    }
  },
}
</script>
