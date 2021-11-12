<template>

	<div class="details detail-cardnews">
		<!-- cardnews-wrap// -->
		<section class="cardnews-wrap">
			<div class="cardnews-inner" style="max-width:507px;"><!-- 이미지 maxheight:780px에 맞춰 렌더링된 이미지 가로사이즈 구해서 넣어주세요. -->
				<div class="cardswiper-wrap">
					<swiper ref="thumbList1"
              :options="cardswiper"
              @ready="swiperReady"
              @slideChange="slideChangeSwiperCard"
              class="swiper cardswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
					<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
						<span class="imgbox">
							<img alt="" :src="item.img" />
						</span>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
				</div>

				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>

				<div class="loading">
					<span style="width:20%;"></span><!-- 로딩에따라 width값 부여해주세요 -->
				</div>
				
				<!-- innercon// -->
				<div class="innercon">
					<div class="playoption">
						<button type="button" class="btn-play"><!-- 일시정지일경우 active 클래스 추가 -->
							<span class="hide">재생/일시정지</span>
						</button>
						<div class="swiper-pagination-tot">
							<strong>
								<template v-if="cardswiperIdx < 9">0</template>
								{{cardswiperIdx + 1}}
							</strong> /
							<span>
								<template v-if="tthumbList1Ary.length < 10">0</template>
								{{tthumbList1Ary.length}}
							</span>
						</div>
					</div>
					<a href="javascript:;" class="btn-full">
						<span class="hide">전체화면으로 이동</span>
					</a>
				</div>
				<!-- //innercon -->
			</div>
		</section>
		<!-- //cardnews-wrap -->

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

			<div class="btns"><!-- 20210615 버튼 순서 변경 --><!-- 2021-11-02 좋아요 개수 추가로 마크업 수정 -->
				<span>
					<button type="button" class="btn like on">좋아요</button><!-- 활성화 : on 클래스 추가 -->
					<span class="like-num">563</span>
				</span>
				<span>
					<button type="button" class="btn bookmark">즐겨찾기</button>
				</span>
				<span>
					<button type="button" class="btn share">공유하기</button>
				</span>
			</div>

			<p class="desc">100세 시대를 위한 준비, 건강한 신체를 만드는 것이 중요합니다. 그 핵심은? '진짜' 나이, 즉 생체 나이를 줄여야 하는데요, 100년, 그보다 더 많은 시간을 열일할 우리 몸을 위해 우리가 실천해야 할 운동법, 생활 습관 모~두 알려드립니다!</p>

			<div class="caution"><!-- 2021-11-02 순서변경 -->
				<p>본 컨텐츠의 저작권은 한국암웨이의 소유이므로 임의적인 수정/변경/편집 사용을 금지합니다.</p>
			</div>

			<div class="breadcrumb">
				<a href="javascript:;" class="home">home</a>
				<a href="javascript:;">퍼스널케어</a>
				<a href="javascript:;">헤어케어</a>
			</div>
		</section>
		<!-- //detail-visual -->
        
		<!-- thumb-list type-column// -->
		<section class="thumb-list type-column">
			<div class="titlearea">
				<h2 class="h2-title">연관된 다른 콘텐츠</h2>
			</div>
			<div class="columnarea">
				<ul class="column">
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>집 안에 초록을 담다</span>
							</div>
							<div class="badge">
								<!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출// -->
								<!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
									<span class="icon video"><span class="hide">video</span></span>
									<span class="icon file"><span class="hide">file</span></span>
									<span class="icon image"><span class="hide">image</span></span>
									<span class="icon column"><span class="hide">column</span></span>
								-->
								<span class="icon file"><span class="hide">file</span></span>
								<!-- //콘텐츠 유형 -->
							</div>

							<img src="@/assets/images/temp/temp_390X390.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_2.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_3.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_4.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_5.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_6.png">
						</a>
					</li>
				</ul>
			</div>
		</section>
		<!-- //thumb-list type-column -->
        
		<!-- thumb-list type-column// -->
		<section class="thumb-list type-column">
			<div class="titlearea">
				<h2 class="h2-title">맞춤추천</h2>
			</div>
			<div class="columnarea">
				<ul class="column">
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>집 안에 초록을 담다</span>
							</div>
							<div class="badge">
								<!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출// -->
								<!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
									<span class="icon video"><span class="hide">video</span></span>
									<span class="icon file"><span class="hide">file</span></span>
									<span class="icon image"><span class="hide">image</span></span>
									<span class="icon column"><span class="hide">column</span></span>
								-->
								<span class="icon file"><span class="hide">file</span></span>
								<!-- //콘텐츠 유형 -->
							</div>

							<img src="@/assets/images/temp/temp_390X390.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_2.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_3.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_4.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_5.png">
						</a>
					</li>
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
							</div>
							<img src="@/assets/images/temp/temp_390X390_6.png">
						</a>
					</li>
				</ul>
				<button type="button" class="btn more">더보기</button>
			</div>
		</section>
		<!-- //thumb-list type-column -->
        
		<!-- thumb-list type-column : 관련제품// -->
		<section class="thumb-list type-column product">
			<div class="titlearea">
				<h2 class="h2-title">관련제품</h2>
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
								<span class="sop">SOP</span><!-- sop일 경우 노출 --><!-- 2021-11-02 sop 케이스 추가 -->
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
		<!-- //thumb-list type-column : 관련제품 -->

	</div>
    
</template>

<script>

export default {
  name: 'Detail_cardnews',
  data: function () {
    return {
		cardswiperIdx: 0,
		//thumb List 1 Ary
		tthumbList1Ary: [
        {
          img: "/assets/images/temp/temp_780X1200.png",
        },
        {
          img: "/assets/images/temp/temp_780X1200.png",
        },
        {
          img: "/assets/images/temp/temp_780X1200.png",
        },
        {
          img: "/assets/images/temp/temp_780X1200.png",
        },
        {
          img: "/assets/images/temp/temp_780X1200.png",
        },
        {
          img: "/assets/images/temp/temp_780X1200.png",
        },
		],

		cardswiper: {
			slidesPerView: 'auto',
			centeredSlides: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				dynamicBullets: true,
			},
		}

    }
  },
  mounted() {
    // page start !!
    // this.$nextTick(() => {
      // const swiperTop = this.$refs.swiperTop.$swiper
      // const swiperThumbs = this.$refs.swiperThumbs.$swiper
      // swiperTop.controller.control = swiperThumbs
      // swiperThumbs.controller.control = swiperTop
    // })
  },
  methods: {
    swiperReady(swiper) {
      setTimeout(() => {
        swiper.update();
      }, 500)
    },

    ///SwiperTop 슬라이더
    slideChangeSwiperCard() {
      const swiper = this.$refs.thumbList1.$swiper;
      this.cardswiperIdx = swiper.activeIndex;
    },
  },
}
</script>
