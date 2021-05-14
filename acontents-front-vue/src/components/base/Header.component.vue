<template>
  <!-- <header class="header">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="top_right_menu">
      <button type="button"
              class="btn js-search">
        검색
      </button>
      <button type="button"
              class="btn js-menu-opener"
              @click="toggleAsideOpener">
        <div class="menu-opener">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
  </header> -->
	<!-- header// -->

  <div><!-- div 제거하고 분기처리하여 template 바로 밑에 header가 나오게 해주세요 -->
    
    <!-- 상세 헤더// -->
    <header class="header" style="display:none;"><!-- scroll시 fixed 클래스 추가 -->
      <div class="inner">
        <h1 class="hide">A Content</h1>
        <button type="button" class="btn-prev">이전</button>
        <button type="button" class="btn-search">검색</button>
        <button type="button" class="btn-menu">메뉴</button>
      </div>
    </header>
    <!-- //상세 헤더 -->

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

  </div>
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
