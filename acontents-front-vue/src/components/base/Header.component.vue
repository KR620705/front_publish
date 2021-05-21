<template>

  <!-- 메인 헤더// -->
  <header class="header type-main" ><!-- 메인 header인 경우 : type-main 클래스 추가 --><!-- scroll시 fixed 클래스 추가 -->
    <div class="inner">
      <div class="logo-list"><!-- 활성화 : open 클래스 추가 -->
        <ul>
          <li class="acontent"><h1><a href="javascript:;"><span class="hide">A Content</span></a></h1></li>
          <li class="amway"><a href="javascript:;" target="_blank" title="새창으로 열림"><span class="hide">Amway</span></a></li>
        </ul>
        <button type="button" class="btn-open"></button>
      </div>

      <button type="button" class="btn-search">검색</button>
      <button type="button" class="btn-menu">메뉴</button>
    </div>
  </header>
  <!-- //메인 헤더 -->

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
