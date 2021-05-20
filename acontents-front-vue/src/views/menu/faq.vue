<template>
  <div class="menu faq">

	<!-- titlearea// -->
	<section class="titlearea">
		<h2>FAQ</h2>
		<p>A Content 서비스를 보다 원활히 이용하실 수 있도록 도움을 드립니다.</p>
	</section>
	<!-- //titlearea -->

	<!-- accordion// -->
	<section class="accordion">
		<ul>
			<li>
				<button type="button" class="open"><!-- 활성화 : open 클래스 추가 -->
					<h3>FAQ 사용법</h3>
				</button>
				<div class="cont">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br>
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br>
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
			</li>
			<li>
				<button type="button">
					<h3>브랜드</h3>
				</button>
				<div class="cont">
					<p>텍스트</p>
				</div>
			</li>
			<li>
				<button type="button">
					<h3>비즈니스</h3>
				</button>
				<div class="cont">
					<p>텍스트</p>
				</div>
			</li>
			<li>
				<button type="button">
					<h3>피플</h3>
				</button>
				<div class="cont">
					<p>텍스트</p>
				</div>
			</li>
			<li>
				<button type="button">
					<h3>라이프스타일</h3>
				</button>
				<div class="cont">
					<p>텍스트</p>
				</div>
			</li>
			<li>
				<button type="button">
					<h3>라이브러리</h3>
				</button>
				<div class="cont">
					<p>텍스트</p>
				</div>
			</li>
		</ul>
	</section>
	<!-- //accordion -->

  </div>
</template>

<script>
export default {
  name: 'Faq',
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
