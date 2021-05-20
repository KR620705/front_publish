<template>

	<div>

		<!-- modal : 모달 -->
		<app-modal title="샘플 모달"
				:visible.sync="isOpen">
		<div class="modal">
			<div class="modal-mask"></div>
			<div class="modal-dialog">

				<div class="modal-body">

					<!-- modal-image : 이미지 팝업// -->
					<div class="modal-image">
						<img src="@/assets/images/temp/temp_pop_img.png" alt="">

						<div class="modal-btn">
							<label>
								<input type="checkbox">
								<span>오늘 하루 보지 않기</span>
							</label>
							<button type="button" class="modal-body-close">닫기</button>
						</div>
					</div>
					<!-- //modal-image : 이미지 팝업 -->

				</div>
			</div>
		</div>
		</app-modal>
		<!--// modal : 모달 -->

	</div>
    
</template>

<script>

export default {
  name: 'Modal_image',
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
