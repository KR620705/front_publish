<template>
  <div class="menu mylist">

	<!-- thumb-list type-column// -->
	<section class="thumb-list type-column">
		<div class="titlearea">
			<div class="fl">
				<button type="button" class="btn round">전체 선택</button>
				<button type="button" class="btn round">선택 삭제</button>
			</div>
			<div class="fr">
				<button type="button" class="btn round darkgray">취소</button>
			</div>
		</div>
		<div class="columnarea">
			<ul class="column">
				<li>
					<label>
						<input type="checkbox"><span></span>
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
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_2.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_3.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_4.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_5.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_6.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_2.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_3.png">
					</label>
				</li>
				<li>
					<label>
						<input type="checkbox"><span></span>
						<div class="title">
							<span>이스프링 비하인드 스토리 “Why?” 3편</span>
						</div>
						<div class="badge">
							<span class="icon image"><span class="hide">image</span></span>
						</div>
						<img src="@/assets/images/temp/temp_390X390_4.png">
					</label>
				</li>
			</ul>
		</div>
	</section>
	<!-- //thumb-list type-column -->

  </div>
</template>

<script>
export default {
  name: 'Mylistedit',
  data: function () {
    return {

    }
  },
  mounted() {
    // page start !!
    sessionStorage.clear();

  },
  methods:{

  },
}
</script>
<style scoped>
  
</style>