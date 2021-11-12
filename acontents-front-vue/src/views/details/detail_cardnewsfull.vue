<template>

	<div class="details detail-cardnews detail-cardnewsfull">
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

	</div>
    
</template>

<script>

export default {
  name: 'Detail_cardnewsfull',
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
