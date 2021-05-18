<template>

	<div class="main">

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">여름 인스타 감성 사진 모음</h2>
				<a href="javascript:;" class="btn arrow">전체보기</a>
			</div>
			<swiper class="swiper thumbswiper" :options="thumbswiper">
				<swiper-slide>
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
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_2.png">
					</a>
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_3.png">
					</a>
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_4.png">
					</a>
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_5.png">
					</a>
				</swiper-slide>
			</swiper>
			<swiper class="swiper thumbswiper" :options="thumbswiper">
				<swiper-slide>
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
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_2.png">
					</a>
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_3.png">
					</a>
				</swiper-slide>
				
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_4.png">
					</a>
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:;">
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_5.png">
					</a>
				</swiper-slide>
			</swiper>
		</section>
		<!-- //thumb-list -->

	</div>
    
</template>

<script>
export default {
  name: 'Main',
  
  data: function () {
    return {
		thumbswiper: {
          slidesPerView: 'auto'
        }
    }
  },
  mounted() {
    // page start !!
  },
  methods: {

  },
}
</script>
