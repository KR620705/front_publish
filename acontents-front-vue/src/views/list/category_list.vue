<template>

	<div class="list category-list">

		<!-- lnb// -->
		<section class="lnb">
			<div class="swiper-container gnbswiper">
				<div class="swiper-wrapper">
					<a href="javascript:;" class="swiper-slide active">새벽홈</a><!-- 현재 페이지 활성화 : class="active" 추가 -->
					<a href="javascript:;" class="swiper-slide">베스트</a>
					<a href="javascript:;" class="swiper-slide">세일</a>
					<a href="javascript:;" class="swiper-slide">Only H</a>
					<a href="javascript:;" class="swiper-slide">이벤트</a>
				</div>
			</div>
		</section>
		<!-- //lnb -->

		<section class="list-filter">
			
		</section>
        
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
