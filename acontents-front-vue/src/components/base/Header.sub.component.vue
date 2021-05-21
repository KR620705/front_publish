<template>

  <!-- Sub 헤더// -->
  <div class="inner">
    <h1 class="h1-title">A Content</h1>

    <div class="logo-list"><!-- 활성화 : open 클래스 추가 -->
      <ul>
        <li class="acontent"><h1><a href="javascript:;"><span class="hide">A Content</span></a></h1></li>
        <li class="amway"><a href="javascript:;" target="_blank" title="새창으로 열림"><span class="hide">Amway</span></a></li>
      </ul>
      <button type="button" class="btn-open"></button>
    </div>

    <button type="button" class="btn-prev">이전</button>
    <button type="button" class="btn-search">검색</button>
    <button type="button" class="btn-menu">메뉴</button>
  </div>
  <!-- //Sub 헤더 -->

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
