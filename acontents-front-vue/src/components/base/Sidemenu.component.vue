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
        <button type="button" class="btn roundarrow">마이페이지</button>

        <div class="sublink">
          <ul>
            <li class="video"><a href="javascript:;">추천영상</a></li>
            <li class="bookmark"><a href="javascript:;">즐겨찾기</a></li>
            <li class="like"><a href="javascript:;">좋아요</a></li>
          </ul>
        </div>
      </div>
      <!-- //sidemenu-userinfo -->

      <!-- thumb-list type-small// -->
      <section class="thumb-list type-small">
        <div class="titlearea">
          <h3 class="h3-title">시청목록</h3>
        </div>
        <div class="swiper-container thumbswiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
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
            <li class="swiper-slide">
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
            <li class="swiper-slide">
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
            <li class="swiper-slide">
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
            <li class="swiper-slide">
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
          </ul>
        </div>
      </section>
      <!-- //thumb-list type-small -->

      <!-- sidemenu-accordion// -->
      <div class="sidemenu-accordion">
        <ul>
          <li>
            <button type="button" class="open"><!-- 활성화 : open 클래스 추가 -->
              <h3>어바웃 암웨이</h3>
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
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>브랜드</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">depth2</a></li>
                <li><a href="javascript:;">depth2</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>비즈니스</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">depth2</a></li>
                <li><a href="javascript:;">depth2</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>피플</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">depth2</a></li>
                <li><a href="javascript:;">depth2</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>라이프스타일</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">depth2</a></li>
                <li><a href="javascript:;">depth2</a></li>
              </ul>
            </div>
          </li>
          <li>
            <button type="button">
              <h3>라이브러리</h3>
            </button>
            <div class="depth2">
              <ul>
                <li><a href="javascript:;">depth2</a></li>
                <li><a href="javascript:;">depth2</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- //sidemenu-accordion -->

      <!-- sidemenu-bottom// -->
      <div class="sidemenu-bottom">
        <div class="btn-wrap">
					<a href="javaqscript:;" class="btn gray faq">FAQ</a>
					<a href="javaqscript:;" class="btn gray logout">로그아웃</a>
        </div>
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

    }
  },
  mounted() {

  },
  methods:{
    asideClose() {
      this.$store.dispatch('commitIsAsideOpen', {value: false});
    }
  },
}
</script>
