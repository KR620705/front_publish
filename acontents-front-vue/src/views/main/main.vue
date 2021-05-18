<template>

	<div class="main">

		<!-- main-visual// -->
		<section class="main-visual">
			
			<!-- mainswiper// -->
			<swiper class="swiper mainswiper" :options="swiperOptionTop" ref="swiperTop">
			<swiper-slide class="slide-1">
				<!-- <img src="@/assets/images/temp/temp_960X1170.png"> -->
				<div class="title">
					<strong>강렬한 레드 상하이를 만나다</strong>
					<a href="javascript:;" class="btn round">자세히보기</a>
				</div>
			</swiper-slide>
			<swiper-slide class="slide-2">
				<!-- <img src="@/assets/images/temp/temp_390X390_2.png"> -->
				<div class="title">
					<strong>2222강렬한 레드 상하이를 만나다</strong>
					<a href="javascript:;" class="btn round">자세히보기</a>
				</div>
			</swiper-slide>
			<swiper-slide class="slide-3">
				<!-- <img src="@/assets/images/temp/temp_390X390_3.png"> -->
				<div class="title">
					<strong>3333강렬한 레드 상하이를 만나다</strong>
					<a href="javascript:;" class="btn round">자세히보기</a>
				</div>
			</swiper-slide>
			<swiper-slide class="slide-4">
				<!-- <img src="@/assets/images/temp/temp_390X390_4.png"> -->
				<div class="title">
					<strong>4444강렬한 레드 상하이를 만나다</strong>
					<a href="javascript:;" class="btn round">자세히보기</a>
				</div>
			</swiper-slide>
			<swiper-slide class="slide-5">
				<!-- <img src="@/assets/images/temp/temp_390X390_5.png"> -->
				<div class="title">
					<strong>5555강렬한 레드 상하이를 만나다</strong>
					<a href="javascript:;" class="btn round">자세히보기</a>
				</div>
			</swiper-slide>
			</swiper>
			<!-- //mainswiper -->

			<!-- swiper2 Thumbs -->
			<swiper class="swiper mainthumbswiper" :options="swiperOptionThumbs" ref="swiperThumbs">
			<swiper-slide class="slide-1">
				<!-- <img src="@/assets/images/temp/temp_960X1170.png"> -->
			</swiper-slide>
			<swiper-slide class="slide-2">
				<!-- <img src="@/assets/images/temp/temp_390X390_2.png"> -->
			</swiper-slide>
			<swiper-slide class="slide-3">
				<!-- <img src="@/assets/images/temp/temp_390X390_3.png"> -->
			</swiper-slide>
			<swiper-slide class="slide-4">
				<!-- <img src="@/assets/images/temp/temp_390X390_4.png"> -->
			</swiper-slide>
			<swiper-slide class="slide-5">
				<!-- <img src="@/assets/images/temp/temp_390X390_5.png"> -->
			</swiper-slide>
			</swiper>

			<!-- mainswiper// -->
			<!--
			<div class="swiper-container mainswiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_960X1170.png">
						<div class="title">
							<strong>강렬한 레드 상하이를 만나다</strong>
							<a href="javascript:;" class="btn round">자세히보기</a>
						</div>
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_2.png">
						<div class="title">
							<strong>2222강렬한 레드 상하이를 만나다</strong>
							<a href="javascript:;" class="btn round">자세히보기</a>
						</div>
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_3.png">
						<div class="title">
							<strong>3333강렬한 레드 상하이를 만나다</strong>
							<a href="javascript:;" class="btn round">자세히보기</a>
						</div>
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_4.png">
						<div class="title">
							<strong>4444강렬한 레드 상하이를 만나다</strong>
							<a href="javascript:;" class="btn round">자세히보기</a>
						</div>
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_5.png">
						<div class="title">
							<strong>5555강렬한 레드 상하이를 만나다</strong>
							<a href="javascript:;" class="btn round">자세히보기</a>
						</div>
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_6.png">
						<div class="title">
							<strong>6666강렬한 레드 상하이를 만나다</strong>
							<a href="javascript:;" class="btn round">자세히보기</a>
						</div>
					</li>
				</ul>
				<div class="innercon">
					<div class="swiper-pagination-tot">
						<strong>00</strong> / <span>00</span>
					</div>
					<a href="javascript:;" class="btn plus">전체보기</a>
				</div>
			</div>
			-->
			<!-- //mainswiper -->

			<!-- mainthumbswiper// -->
			<!--
			<div class="swiper-container mainthumbswiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide swiper-slide-thumb-active">
						<img src="@/assets/images/temp/temp_960X1170.png">
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_2.png">
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_3.png">
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_4.png">
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_5.png">
					</li>
					<li class="swiper-slide">
						<img src="@/assets/images/temp/temp_390X390_6.png">
					</li>
				</ul>
			</div>
			-->
			<!-- //mainthumbswiper -->
		</section>
		<!-- //main-visual -->
        
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
			<!--
			<div class="swiper-container thumbswiper">
				<ul class="swiper-wrapper">
					<li class="swiper-slide">
						<a href="javascript:;">
							<div class="title">
								<span>집 안에 초록을 담다</span>
							</div>
							<div class="badge">
								<span class="icon video"><span class="hide">video</span></span>
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
			-->
		</section>
		<!-- //thumb-list -->

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">정체기? 씹어먹기</h2>
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
								<span class="icon file"><span class="hide">file</span></span>
								<!-- //콘텐츠 유형 -->
							</div>

							<img src="@/assets/images/temp/temp_390X390.png">
						</a>
					</li>
					<li class="swiper-slide">
						<a href="javascript:;">
							<div class="title">
								<span>집 안에 초록을 담다 집 안에 초록을 담다 집 안에 초록을 담다</span>
							</div>
							<div class="badge">
								<span class="icon column"><span class="hide">file</span></span>
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

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">매력 터짐! 30대 제품 포트폴리오</h2>
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
		<!-- //thumb-list -->

		<!-- thumb-list type-multiline : 인기 콘텐츠 영역// -->
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
				<a href="javascript:;"><img src="@/assets/images/views/main_banner.png" alt=""></a>
			</div>
		</section>
		<!-- //main-banner -->

		<!-- thumb-list// -->
		<section class="thumb-list">
			<div class="titlearea">
				<h2 class="h2-title">우리를 강하게 하는 암웨이의 생각들</h2>
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
		<!-- //thumb-list -->

		<!-- thumb-list type-one : 추천 콘텐츠 영역// -->
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
		swiperOptionTop: {
        },
        swiperOptionThumbs: {
          spaceBetween: 10,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        },
		thumbswiper: {
          slidesPerView: 'auto',
        }
    }
  },
  mounted() {
    // page start !!
    this.$nextTick(() => {
        const swiperTop = this.$refs.swiperTop.$swiper
        const swiperThumbs = this.$refs.swiperThumbs.$swiper
        swiperTop.controller.control = swiperThumbs
        swiperThumbs.controller.control = swiperTop
      })
  },
  methods: {

  },
}
</script>
