<template>

	<div class="list category-list">

		<!-- lnb// -->
		<section class="lnb">
			<swiper ref="lnbList1"
              :options="lnbswiper"
              @ready="swiperReady"
              class="swiper lnbswiper">
				<swiper-slide class="slide-1">
					<a href="javascript:;" class="active">뉴트리라이트</a><!-- 현재 페이지 : active 클래스 추가 -->
				</swiper-slide>
				<swiper-slide class="slide-1">
					<a href="javascript:;">아티스트리</a>
				</swiper-slide>
				<swiper-slide class="slide-1">
					<a href="javascript:;">글리스터</a>
				</swiper-slide>
				<swiper-slide class="slide-1">
					<a href="javascript:;">G&amp;H</a>
				</swiper-slide>
				<swiper-slide class="slide-1">
					<a href="javascript:;">뉴트리라이트</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //lnb -->

		<!-- list-filter// -->
		<section class="list-filter">
			<div class="select"><!-- 활성화 : open 클래스 추가 -->
				<button type="button">최신순</button>
				<ul>
					<li class="active"><a href="javascript:;">최신순</a></li><!-- 현재 선택값 : active 클래스 추가 -->
					<li><a href="javascript:;">인기순</a></li>
				</ul>
			</div>
		</section>
		<!-- //list-filter -->
        
		<!-- thumb-list type-column// -->
		<section class="thumb-list type-column">
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
					<li>
						<a href="javascript:;">
							<div class="title">
								<span>이스프링 비하인드 스토리 “Why?” 3편</span>
							</div>
							<div class="badge">
								<span class="icon image"><span class="hide">image</span></span>
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
  name: 'Category_list',
  data: function () {
    return {
		//data

		//lnb List 1 Ary
		lnbList1Ary: [
        {
          title: "뉴트리라이트",
        },
        {
          title: "아티스트리",
        },
        {
          title: "글리스터",
        },
        {
          title: "G&H",
        },
        {
          title: "뉴트리라이트",
        },
        {
          title: "아티스트리",
        },
        {
          title: "글리스터",
        },
		],

		// swiper options
		lnbswiper: {
			slidesPerView: 'auto',
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
    }

  },
}
</script>
