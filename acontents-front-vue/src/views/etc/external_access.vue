<template>

	<div class="etc external-access details detail">
		<!-- 외부 접근 시 헤더 -->
		<section class="header-external">
			<!-- 외부 접근 시 보여지는 헤더의 로고 -->
			<div class="logo"></div>
			<div class="btn-acontent">
				<button type="button" class="btn round red">A 콘텐츠 방문하기</button>
			</div>
		</section>
		<!-- //외부 접근 시 헤더 -->

		<!-- video-wrap// -->
		<section class="video-wrap">
			<div class="inner">
				<!-- brightcove 동영상 영역 -->
			</div>

			<!-- 비디오영역 내 레이어 : 비노출시 hide처리해주세요.// -->
			<div class="video-dim">
				<div class="btn-wrap">
					<button type="button" class="btn round playnext">이어보기</button>
					<button type="button" class="btn round first">처음부터</button>
				</div>
			</div>
			<!-- //비디오영역 내 레이어 -->
		</section>
		<!-- //video-wrap -->

		<!-- detail-visual// -->
		<section class="detail-visual">
			<div class="titlearea">
				<h2 class="h2-title">분노는 성공의 힘 Ep.1</h2>
				<h3 class="h3-title">[곽금주 교수와 함께하는 심리학과 여성 리더십] 시즌3_성공을 위하여</h3>
			</div>

			<ul class="tag">
				<li><a href="javascript:;">#건강</a></li>
				<li><a href="javascript:;">#노인</a></li>
				<li><a href="javascript:;">#내나이가어때서</a></li>
				<li><a href="javascript:;">#장수비법</a></li>
				<li><a href="javascript:;">#건강라디오</a></li>
			</ul>

			<p class="year">2021</p>

			<!-- 활성화 : on 클래스 추가 -->
			<!-- <div class="btns">
				<button type="button" class="btn like on">좋아요</button>
				<button type="button" class="btn share">공유하기</button>
				<button type="button" class="btn bookmark">즐겨찾기</button>
			</div> -->

			<p class="desc">100세 시대를 위한 준비, 건강한 신체를 만드는 것이 중요합니다. 그 핵심은? '진짜' 나이, 즉 생체 나이를 줄여야 하는데요, 100년, 그보다 더 많은 시간을 열일할 우리 몸을 위해 우리가 실천해야 할 운동법, 생활 습관 모~두 알려드립니다!</p>

			<div class="breadcrumb">
				<a href="javascript:;" class="home">home</a>
				<a href="javascript:;">퍼스널케어</a>
				<a href="javascript:;">헤어케어</a>
			</div>

			<div class="caution">
				<p>본 컨텐츠의 저작권은 한국암웨이의 소유이므로 임의적인 수정/변경/편집 사용을 금지합니다.</p>
			</div>
		</section>
		<!-- //detail-visual -->
        
		<!-- thumb-list type-column : 관련 상품// -->
		<section class="thumb-list type-column product">
			<div class="titlearea">
				<h2 class="h2-title">관련 상품</h2>
			</div>
			<div class="columnarea">
				<ul class="column">
					<li>
						<a href="javascript:;">
							<div class="imgbox">
								<img src="@/assets/images/temp/temp_390X390.png">
								<div class="badge">
									<!-- 상품 유형 : 장바구니 이미지 고정// -->
									<span class="icon cart"><span class="hide">cart</span></span>
								</div>
							</div>
							<div class="title">
								<span>집 안에 초록을 담다</span>
							</div>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="imgbox">
								<img src="@/assets/images/temp/temp_390X390_2.png">
								<div class="badge">
									<span class="icon cart"><span class="hide">cart</span></span>
								</div>
							</div>
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="imgbox">
								<img src="@/assets/images/temp/temp_390X390_3.png">
								<div class="badge">
									<span class="icon cart"><span class="hide">cart</span></span>
								</div>
							</div>
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편 이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="imgbox">
								<img src="@/assets/images/temp/temp_390X390_4.png">
								<div class="badge">
									<span class="icon cart"><span class="hide">cart</span></span>
								</div>
							</div>
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</section>
		<!-- //thumb-list type-column : 관련 상품 -->

	</div>
    
</template>

<script>

export default {
  name: 'External_access',
  data: function () {
    return {

    }
  },
  mounted() {
    // page start !!
    this.AAA();
  },
  methods:{
    AAA() {
      console.log('aaaa');
    }

  },
}
</script>
