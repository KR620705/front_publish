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
	<header class="header type-main"><!-- 메인 header인 경우 : type-main 클래스 추가 --><!-- scroll 위치가 0 이라면 클래스 제거 / 0 보다 크면 fixed 클래스 추가 -->
		<div class="inner">
			<ul class="logo-list"><!-- 활성화 : open 클래스 추가 -->
				<li class="acontent"><a href="javascript:;"><span class="hide">A Content</span></a></li>
				<li class="amway"><a href="javascript:;" target="_blank" title="새창으로 열림"><span class="hide">Amway</span></a></li>
			</ul>
			<button type="button" class="btn-search">검색</button>
			<button type="button" class="btn-menu">메뉴</button>
		</div>
	</header>
	<!-- //header -->
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
