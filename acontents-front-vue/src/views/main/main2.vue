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
    </section>
    <!-- //main-visual -->


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
          imgPc: '/assets/images/temp/temp_960X1170.png',
          imgMb: '/assets/images/temp/temp_390X390_2.png'
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
        // centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 15,
        slideToClickedSlide: true,
      },
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
      this.isPc = (window.innerWidth > 768);
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
<style lang="scss" scoped>
.mainthumbswiper {
  max-width: none !important;

  .swiper-slide.swiper-slide-active {
    opacity: .6 !important;
  }
  .swiper-slide.on {
    opacity: 1 !important;
  }
}
</style>