<template>
  <div class="landing guide">

    <h1 class="guideh1">A Content Front GUIDE</h1>

    <h2 class="guideh2">※ Page</h2>

    <h3 class="guideh3">default 페이지</h3>
    <div class="guidetxt">
      1. 폴더구조에 적합하도록 파일을 생성한다.<br>
      2. 만들어진 vue파일 내에서 template 바로 아래에 있는 div에 폴더명과 해당페이지명 클래스를 선언해준다.<br>
        &lt;template&gt;<br>
          <div class="guideindent">
          &lt;div class="폴더명 해당페이지명"&gt;<br>
          &lt;/div&gt;<br>
        </div>
        &lt;/template&gt;
    </div>

    <h2 class="guideh2">※ images</h2>

    <h3 class="guideh3">폴더구조</h3>
    <div class="guidetxt">
      - 경로위치 : /assets/images/<br>
      <div class="guideindent">
        /common : 공통<br>
        /temp : 테스트<br>
        /views : 페이지별<br>
        <br>
      </div>
    </div>

    <h3 class="guideh3">네이밍</h3>
    <div class="guidetxt">
      - 소문자만 사용하며, 대문자는 사용하지 않는다.<br>
      - 네이밍이 길경우에는 언더바("_")를 사용한다.<br>
      <div class="guideindent">
        로고 : logo_<br>
        폼 : form_<br>
        아이콘 : icon_<br>
        버튼 : btn_<br>
        뱃지 : badge_<br>
        플러그인 : 플러그인명_<br>
        공통 헤더에 있는 이미지 : header_<br>
        공통 메뉴에 있는 이미지 : sidemenu_<br>
        공통 팝업에 있는 이미지 : modal_<br>
      </div>
    </div>

    <h2 class="guideh2">※ SCSS</h2>

    <h3 class="guideh3">폴더구조</h3>
    <div class="guidetxt">
      - 경로위치 : /assets/scss/<br>
      <div class="guideindent">
        /mixins : setting &amp; util<br>
        /config : setting &amp; util<br>
        /base : 기본 layout<br>
        /component : 요소 Elements<br>
      </div>
    </div>

    <h3 class="guideh3">클래스와 변수 네이밍</h3>
    <div class="guidetxt">
      - 소문자만 사용하며, 대문자는 사용하지 않는다.<br>
      - 네이밍이 길경우에는 하이픈("-")을 사용한다.<br>
    </div>

    <h3 class="guideh3">style.scss</h3>
    <div class="guidetxt">
      - 나뉘어진 scss 파일을 한번에 불러와 관리하는 곳으로, 선언 순서는 아래와 같다.<br>
      <div class="guideindent">
        1. setting &amp; util<br>
        2. 기본 layout<br>
        3. 요소 Elements<br>
        4. page
      </div>
      - 작업중 사용하지 않는 파일은 주석처리로 한다.(페이지 90%이상 나올때쯤에 다시한번 정리한다.)
    </div>
    
    <h2 class="guideh2">※ 공통 마크업 (추가되면 업데이트할 것.)</h2>

    <h3 class="guideh3">titlearea</h3>
    <div class="guidewrap">
      <!-- titlearea// -->
			<div class="titlearea">
				<h2 class="h2-title">h2 대제목입니다.</h2>
				<h3 class="h3-title">h3 소제목입니다.</h3>
			</div>
      <!-- //titlearea -->
    </div>

    <h3 class="guideh3">btn (의미에 맞게 a태그, 버튼태그 사용할 것.)</h3>
    <div class="guidewrap">
      <!-- button// -->
			<button type="button" class="btn" disabled>.btn:disabled</button>
			<button type="button" class="btn default">.btn.default</button>
			<button type="button" class="btn gray">.btn.gray</button>
			<button type="button" class="btn red">.btn.red</button>
			<button type="button" class="btn round">.btn.round</button>
			<button type="button" class="btn arrow">.btn.arrow</button>
			<button type="button" class="btn plus">.btn.plus</button>
			<button type="button" class="btn more">.btn.more</button>
      <!-- //button -->
    </div>

    <h3 class="guideh3">btn-wrap</h3>
    <div class="guidewrap">
      <!-- btn-wrap// -->
      <div class="btn-wrap">
        <button type="button" class="btn round">이어보기</button>
        <button type="button" class="btn round">처음부터</button>
      </div>
        <div class="btn-wrap">
					<a href="javaqscript:;" class="btn gray faq">FAQ</a>
					<a href="javaqscript:;" class="btn gray logout">로그아웃</a>
        </div>
      <!-- //btn-wrap -->
    </div>

    <h3 class="guideh3">tag default</h3>
    <div class="guidewrap">
      <!-- tag// -->
			<ul class="tag">
				<li><a href="javascript:;">#건강</a></li>
				<li><a href="javascript:;">#노인</a></li>
				<li><a href="javascript:;">#내나이가어때서</a></li>
				<li><a href="javascript:;">#장수비법</a></li>
				<li><a href="javascript:;">#건강라디오</a></li>
			</ul>
      <!-- //tag -->
    </div>

    <h3 class="guideh3">tag type-circle</h3>
    <div class="guidewrap">
      <!-- tag// -->
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
      <!-- //tag -->
    </div>

    <h3 class="guideh3">thumb-list default</h3>
    <div class="guidewrap">
      <!-- thumb-list// -->
      <section class="thumb-list">
        <div class="titlearea">
          <h2 class="h2-title">여름 인스타 감성 사진 모음</h2>
          <a href="javascript:;" class="btn arrow">전체보기</a>
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
                  <span class="icon video"><span class="hide">video</span></span>
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
      <!-- //thumb-list -->
    </div>

    <h3 class="guideh3">thumb-list type-multiline</h3>
    <div class="guidewrap">
      <!-- thumb-list type-multiline// -->
      <section class="thumb-list type-multiline">
        <div class="titlearea">
          <h2 class="h2-title">떠오르는 HOT 이슈</h2>
          <a href="javascript:;" class="btn arrow">전체보기</a>
        </div>
        <div class="swiper-container thumbmultiswiper"><!-- swiper 두줄 타입(slidesPerColumn="2") 적용해주세요/ -->
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
            <li class="swiper-slide">
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
      <!-- //thumb-list type-multiline -->
    </div>

    <h3 class="guideh3">thumb-list type-one</h3>
    <div class="guidewrap">
      <!-- thumb-list type-one// -->
      <section class="thumb-list type-one">
        <div class="titlearea">
          <h2 class="h2-title">자신있게 추천드립니다</h2>
          <a href="javascript:;" class="btn arrow">전체보기</a>
        </div>
        <div class="swiper-container thumboneswiper">
          <ul class="swiper-wrapper">
            <li class="swiper-slide">
              <a href="javascript:;">
                <span class="imgbox">
                  <img src="@/assets/images/temp/temp_390X390.png">
                </span>
                <div class="contentbox">
                  <strong class="box-title">Amagram VOL.329 MARCH 2021</strong>
                  <p class="box-desc">설명글은 두줄이상 안넘게 글자 제한 수 꼭 설명글은 두줄이상 안넘게 글자 제한 설명글은 두줄이상 안넘게 글자 제한 수 꼭 설명글은 두줄이상 안넘게 글자 제한</p>
                </div>
              </a>
            </li>
            <li class="swiper-slide">
              <a href="javascript:;">
                <span class="imgbox">
                  <img src="@/assets/images/temp/temp_390X390_2.png">
                </span>
                <div class="contentbox">
                  <strong class="box-title">Amagram VOL.329 MARCH 2021</strong>
                  <p class="box-desc">설명글은 두줄이상 안넘게 글자 제한 수 꼭 설명글은 두줄이상 안넘게 글자 제한</p>
                </div>
              </a>
            </li>
            <li class="swiper-slide">
              <a href="javascript:;">
                <span class="imgbox">
                  <img src="@/assets/images/temp/temp_390X390_3.png">
                </span>
                <div class="contentbox">
                  <strong class="box-title">Amagram VOL.329 MARCH 2021</strong>
                  <p class="box-desc">설명글은 두줄이상 안넘게 글자 제한 수 꼭 설명글은 두줄이상 안넘게 글자 제한</p>
                </div>
              </a>
            </li>
          </ul>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </section>
      <!-- //thumb-list type-one -->
    </div>

    <h3 class="guideh3">thumb-list type-column</h3>
    <div class="guidewrap">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Guide',
  data: function () {
    return {

    }
  },
  mounted() {
    // page start !!
    sessionStorage.clear();
    //this.AAA();
  },
  methods:{
    // AAA() {
    //   console.log('aaaa');
      
    // }

  },
}
</script>
<style>
  .landing{padding:50px 20px;background:#fff;color:#000;font-family:sans-serif, Malgungothic, "맑은고딕", Dotum, "돋움";}
  .landing .guideh1{font-size:26px;font-weight:600;text-align:center;}
  .landing .guideh2{margin-top:50px;font-size:20px;font-weight:600;}
  .landing .guideh3{margin-top:30px;padding-left:10px;font-size:16px;font-weight:600;border-left:4px solid #399aed;}
  .landing .guidetxt{margin-top:10px;font-size:14px;line-height:1.6;}
  .landing .guidetxt .guideindent{margin-left:15px;}
  .landing .guidewrap {margin-top:10px;max-width:360px;background:#000;padding:20px;}
</style>