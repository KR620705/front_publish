<template>

	<div class="main">

		<!-- main-visual// -->
		<section class="main-visual">
			
			<!-- mainswiper// -->
			<swiper ref="swiperTop"
				:options="swiperOptionTop"
				@ready="swiperReady"
				@slideChange="slideChangeSwiperTop"
				class="swiper mainswiper">
        <swiper-slide v-for="(item, key) in mainSlideAry"
                      :style="`background-image: url(${(isPc) ? item.imgPc : item.imgMb})`"
                      :key="key">
          <div class="title">
            <strong>{{item.title}}</strong>
            <a href="javascript:;" class="btn round">자세히보기</a>
          </div>
        </swiper-slide>
			</swiper>
			<!-- //mainswiper -->

			<!-- mainthumb-wrap// -->
			<div class="mainthumb-wrap">
				<!-- mainthumbswiper// -->
				<swiper ref="swiperThumbs"
					:options="swiperOptionThumbs"
					@ready="swiperReady"
					@click="thumbsClick"
					class="swiper mainthumbswiper">
			<swiper-slide v-for="(item, key) in mainSlideAry"
						:data-idx="key"
						:class="(mainSlideIdx === key)? 'on' : ''"
						:style="`background-image: url(${(isPc) ? item.imgPc : item.imgMb})`"
						:key="key">
			&nbsp;
			</swiper-slide>
				</swiper>
				<!-- //mainthumbswiper -->

				<!-- innercon// -->
				<div class="innercon">
					<div class="swiper-pagination-tot">
					<strong>
						<template v-if="mainSlideIdx < 9">0</template>
						{{mainSlideIdx + 1}}
					</strong> /
					<span>
						<template v-if="mainSlideAry.length < 10">0</template>
						{{mainSlideAry.length}}
					</span>
					</div>
					<a href="javascript:;" class="btn plus">전체보기</a>
				</div>
				<!-- //innercon -->
			</div>
			<!-- //mainthumb-wrap -->
		</section>
		<!-- //main-visual -->
        
		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">여름 인스타 감성 사진 모음</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper ref="thumbList1"
              :options="thumbswiper"
              @ready="swiperReady"
              class="swiper thumbswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<div class="title">
							<span>{{item.title}}</span>
						</div>
						<div class="badge">
							<span :class="`icon ${item.type}`">
								<span class="hide">{{item.type}}</span>
							</span>
						</div>

						<img alt="" :src="item.img" />
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list -->

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">정체기? 씹어먹기</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper ref="thumbList1"
              :options="thumbswiper"
              @ready="swiperReady"
              class="swiper thumbswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<div class="title">
							<span>{{item.title}}</span>
						</div>
						<div class="badge">
							<span :class="`icon ${item.type}`">
								<span class="hide">{{item.type}}</span>
							</span>
						</div>

						<img alt="" :src="item.img" />
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list -->

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">매력 터짐! 30대 제품 포트폴리오</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper ref="thumbList1"
              :options="thumbswiper"
              @ready="swiperReady"
              class="swiper thumbswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<div class="title">
							<span>{{item.title}}</span>
						</div>
						<div class="badge">
							<span :class="`icon ${item.type}`">
								<span class="hide">{{item.type}}</span>
							</span>
						</div>

						<img alt="" :src="item.img" />
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list -->

		<!-- thumb-list type-multiline : 인기 콘텐츠 영역// -->
		<section class="thumb-list type-multiline">
			<div class="titlearea">
				<h2 class="h2-title">떠오르는 HOT 이슈</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper ref="thumbList1"
              :options="thumbmultiswiper"
              @ready="swiperReady"
              class="swiper thumbmultiswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<div class="title">
							<span>{{item.title}}</span>
						</div>
						<div class="badge">
							<span :class="`icon ${item.type}`">
								<span class="hide">{{item.type}}</span>
							</span>
						</div>

						<img alt="" :src="item.img" />
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list type-multiline : 인기 콘텐츠 영역 -->

		<!-- tag-list// -->
		<section class="tag-list">
			<div class="titlearea">
				<h2 class="h2-title">최근 HOT한 태그 #</h2>
			</div>
			<ul class="tag type-circle">
				<li><a href="javascript:;">#감성</a></li>
				<li><a href="javascript:;">#노력</a></li>
				<li><a href="javascript:;">#암웨이</a></li>
				<li><a href="javascript:;">#장수비법</a></li>
				<li><a href="javascript:;">#운동</a></li>
				<li><a href="javascript:;">#건강라디오</a></li>
				<li><a href="javascript:;">#노인</a></li>
				<li><a href="javascript:;">#브랜드캠페인</a></li>
				<li><a href="javascript:;">#영양소</a></li>
				<li><a href="javascript:;">#다이어트</a></li>
			</ul>
		</section>
		<!-- //tag-list -->

		<!-- main-banner// -->
		<section class="main-banner">
			<div class="inner">
				<a href="javascript:;" class="mo"><img src="@/assets/images/views/main_banner.png" alt="신체 나이를 아세요? 건강 라디오 시즌2"></a>
				<a href="javascript:;" class="pc"><img src="@/assets/images/views/main_banner_pc.png" alt="신체 나이를 아세요? 건강 라디오 시즌2"></a>
			</div>
		</section>
		<!-- //main-banner -->

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">우리를 강하게 하는 암웨이의 생각들</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper ref="thumbList1"
              :options="thumbswiper"
              @ready="swiperReady"
              class="swiper thumbswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<div class="title">
							<span>{{item.title}}</span>
						</div>
						<div class="badge">
							<span :class="`icon ${item.type}`">
								<span class="hide">{{item.type}}</span>
							</span>
						</div>

						<img alt="" :src="item.img" />
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list -->

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">가장 빠른 현장 스케치
					<span class="sub-title">[2022 글로벌 리더십 세미나]</span>
				</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper ref="thumbList1"
              :options="thumbswiper"
              @ready="swiperReady"
              class="swiper thumbswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<div class="title">
							<span>{{item.title}}</span>
						</div>
						<div class="badge">
							<span :class="`icon ${item.type}`">
								<span class="hide">{{item.type}}</span>
							</span>
						</div>

						<img alt="" :src="item.img" />
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list -->

		<!-- thumb-list type-one : 추천 콘텐츠 영역// -->
		<section class="thumb-list type-one">
			<div class="titlearea">
				<h2 class="h2-title">자신있게 추천드립니다</h2>
				<!-- <a href="javascript:;" class="btn arrow">전체보기</a> --><!-- 20210615 버튼 삭제 -->
			</div>
			<div class="thumboneswiper-wrap">
			<swiper ref="thumbList1"
              :options="thumboneswiper"
              @ready="swiperReady"
              class="swiper thumboneswiper">
        <!-- 콘텐츠 유형 : 해당 유형에 따라 노출 비노출 -->
        <!-- video:비디오 / file:파일 / image:이미지 / column:칼럼
          <span class="icon video"><span class="hide">video</span></span>
          <span class="icon file"><span class="hide">file</span></span>
          <span class="icon image"><span class="hide">image</span></span>
          <span class="icon column"><span class="hide">column</span></span>
        -->
				<swiper-slide v-for="(item, key) in tthumbList1Ary"
                      :key="key">
					<a href="javascript:;">
						<span class="imgbox">
							<img alt="" :src="item.img" />
							
							<div class="badge">
								<span :class="`icon ${item.type}`">
									<span class="hide">{{item.type}}</span>
								</span>
							</div>
						</span>
						<div class="contentbox">
							<strong class="box-title">Amagram VOL.329 MARCH 2021</strong>
							<p class="box-desc">설명글은 두줄이상 안넘게 글자 제한 수 꼭 설명글은 두줄이상 안넘게 글자 제한 설명글은 두줄이상 안넘게 글자 제한 수 꼭 설명글은 두줄이상 안넘게 글자 제한</p>
						</div>
					</a>
				</swiper-slide>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
			</div>
		</section>
		<!-- //thumb-list type-one : 추천 콘텐츠 영역 -->

		<!-- thumb-list type-column// -->
		<section class="thumb-list type-column">
			<div class="titlearea">
				<h2 class="h2-title">#MyFirstAmway</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
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
								<span class="icon image"><span class="hide">image</span></span>
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
				</ul>
			</div>
		</section>
		<!-- //thumb-list type-column -->

		<!-- thumb-list type-column// -->
		<section class="thumb-list type-column">
			<div class="titlearea">
				<h2 class="h2-title">새로운 소식을 만나보세요</h2>
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
								<span class="icon image"><span class="hide">image</span></span>
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
				</ul>
			</div>
		</section>
		<!-- //thumb-list type-column -->

	</div>
    
</template>

<script>
export default {
  name: 'Main',
  data: function () {
    return {
		isPc: true,
		mainSlideIdx: 0,
		// data
		mainSlideAry: [
		{
			title: '강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_1300X800.png',
			imgMb: '/assets/images/temp/temp_960X1170.png'
		},
		{
			title: '2강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_390X390_2.png',
			imgMb: '/assets/images/temp/temp_390X390_3.png'
		},
		{
			title: '3강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_390X390_3.png',
			imgMb: '/assets/images/temp/temp_390X390_4.png'
		},
		{
			title: '4강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_390X390_4.png',
			imgMb: '/assets/images/temp/temp_390X390_5.png',
		},
		{
			title: '5강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_390X390_5.png',
			imgMb: '/assets/images/temp/temp_960X1170.png'
		},
		{
			title: '6강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_960X1170.png',
			imgMb: '/assets/images/temp/temp_390X390_2.png'
		},
		{
			title: '5강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_390X390_5.png',
			imgMb: '/assets/images/temp/temp_960X1170.png'
		},
		{
			title: '6강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_960X1170.png',
			imgMb: '/assets/images/temp/temp_390X390_2.png'
		},
		{
			title: '5강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_390X390_5.png',
			imgMb: '/assets/images/temp/temp_960X1170.png'
		},
		{
			title: '6강렬한 레드 상하이를 만나다',
			imgPc: '/assets/images/temp/temp_960X1170.png',
			imgMb: '/assets/images/temp/temp_390X390_2.png'
		},
		],

		//tthumb List 1 Ary
		tthumbList1Ary: [
        {
          title: "집 안에 초록을 담다",
          type: "video",
          img: "/assets/images/temp/temp_390X390.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 2편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_2.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 3편",
          type: "file",
          img: "/assets/images/temp/temp_390X390_3.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 4편",
          type: "column",
          img: "/assets/images/temp/temp_390X390_4.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 5편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_5.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 5편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_5.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 5편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_5.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 5편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_5.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 5편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_5.png",
        },
        {
          title: "이스프링 비하인드 스토리 “Why?” 5편",
          type: "image",
          img: "/assets/images/temp/temp_390X390_5.png",
        },
		],

		// swiper options
		swiperOptionTop: {
			spaceBetween: 0,
        },
        swiperOptionThumbs: {
			slidesPerView: 'auto',
			touchRatio: 0.2,
			slideToClickedSlide: true,
        },
		thumbswiper: {
			slidesPerView: 'auto',
        },
		thumbmultiswiper: {
			slidesPerView: 'auto',
			slidesPerColumn: 2,
			spaceBetween: 10,

			breakpoints: {
				768: {
					slidesPerColumn: 1,
					spaceBetween: 0,
				}
			}
		},
		thumboneswiper: {
			loop: true,
			slidesPerView: 'auto',
			centeredSlides: true,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
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
  beforeMount () {
    // 페이지 시작전 리사이즈 리스너를 실행
    this.checkWindowWidth()
    window.addEventListener('resize', this.checkWindowWidth)
  },
  beforeDestroy () {
    // 현재페이지에서 나갈경우 리사이즈 리스너를 종료
    window.removeEventListener('resize', this.checkWindowWidth)
  },
  methods: {
    swiperReady(swiper) {
      setTimeout(() => {
        swiper.update();
      }, 500)
    },
    /** 브라우저 리사이즈 감시
     *  브라우저 너비가 768px 보다 작을경우
     *  isPc = false;
     *  */
    checkWindowWidth () {
      this.isPc = (window.innerWidth >= 768);
    },

    ///SwiperTop 슬라이더
    slideChangeSwiperTop() {
      const swiper = this.$refs.swiperTop.$swiper;
      this.mainSlideIdx = swiper.activeIndex;
      this.$refs.swiperThumbs.$swiper.slideTo(swiper.activeIndex, 1000)
    },

    //thumbsClick
    thumbsClick(evt) {
      const idx = Number(evt.target.getAttribute('data-idx'));
      this.$refs.swiperTop.$swiper.slideTo(idx, 1000)
    }
  },
}
</script>
