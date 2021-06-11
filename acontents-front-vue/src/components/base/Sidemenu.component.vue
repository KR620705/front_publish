<template>
  <aside class="sidemenu"><!-- 활성화 : aside-open 클래스 추가, body에 ov-hidden 클래스 추가 -->

    <div class="sidemenu-inner">

      <!-- sidemenu-header// -->
      <div class="sidemenu-header">
        <button type="button" class="btn-home">홈으로 가기</button>
        <button type="button" class="btn-close">닫기</button>
      </div>
      <!-- //sidemenu-header -->

      <!-- sidemenu-userinfo// -->
      <div class="sidemenu-userinfo">
        <div class="user">
          <h2>박보영님</h2>
          <p>즐거운 하루 되세요!</p>
        </div>

        <div class="sublink">
          <ul>
            <li class="mypages"><a href="javascript:;">마이 페이지</a></li>
            <li class="faq"><a href="javascript:;">FAQ</a></li>
            <li class="recommend"><a href="javascript:;">맞춤 추천</a></li>
            <li class="like"><a href="javascript:;">즐겨찾기</a></li>
          </ul>
        </div>
      </div>
      <!-- //sidemenu-userinfo -->

      <!-- thumb-list type-small// -->
      <section class="thumb-list type-small">
        <div class="titlearea">
          <h3 class="h3-title">시청목록</h3>
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
      <!-- //thumb-list type-small -->

      <!-- sidemenu-accordion// -->
      <div class="sidemenu-accordion">
        <ul>
          <li>
            <button type="button" class="open pc-current"><!-- 활성화 : open 클래스 추가 --><!-- 현재페이지 표시 : pc-current 클래스 추가 -->
              <h3>어바웃 암웨이</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">암웨이NOW</a></li>
                <li class="pc-current"><a href="javascript:;">암웨이 헤리티지</a></li><!-- 현재페이지 표시 : pc-current 클래스 추가 -->
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>브랜드</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">뉴트리라이트</a></li>
                <li><a href="javascript:;">아티스트리</a></li>
                <li><a href="javascript:;">글리스터</a></li>
                <li><a href="javascript:;">G&amp;H</a></li>
                <li><a href="javascript:;">새티니크</a></li>
                <li><a href="javascript:;">베르가닉</a></li>
                <li><a href="javascript:;">엣모스피어 스카이</a></li>
                <li><a href="javascript:;">이스프링</a></li>
                <li><a href="javascript:;">암웨이홈</a></li>
                <li><a href="javascript:;">암웨이퀸</a></li>
                <li><a href="javascript:;">XS 에너지</a></li>
                <li><a href="javascript:;">n by Nutrilite</a></li>
                <li><a href="javascript:;">원포원</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>비즈니스</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">사업기회</a></li>
                <li><a href="javascript:;">세일즈 &amp; 마케팅 플랜</a></li>
                <li><a href="javascript:;">NCA</a></li>
                <li><a href="javascript:;">디지털 커뮤니케이션</a></li>
                <li><a href="javascript:;">출시 및 프로모션</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>피플</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">ABO 스토리</a></li>
                <li><a href="javascript:;">암웨이 커뮤니티</a></li>
                <li><a href="javascript:;">스페셜 인터뷰</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>라이프스타일</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">건강</a></li>
                <li><a href="javascript:;">뷰티</a></li>
                <li><a href="javascript:;">리빙</a></li>
                <li><a href="javascript:;">트렌드</a></li>
                <li><a href="javascript:;">자기계발</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>라이브러리</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">교육 자료</a></li>
                <li><a href="javascript:;">온라인 매거진</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- //sidemenu-accordion -->

      <!-- sidemenu-bottom// -->
      <div class="sidemenu-bottom">
					<a href="javaqscript:;" class="btn logout">로그아웃</a>
      </div>
      <!-- //sidemenu-bottom -->

    </div>
  </aside>
</template>


<script>
export default {
  components: {

  },
  data: function () {
    return {

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
      ],
      
      thumbswiper: {
        slidesPerView: 'auto'
      }

    }
  },
  mounted() {
    // page start !!

  },
  methods:{
    swiperReady(swiper) {
      setTimeout(() => {
        swiper.update();
      }, 500)
    },

    asideClose() {
      this.$store.dispatch('commitIsAsideOpen', {value: false});
    }
  },
}
</script>
