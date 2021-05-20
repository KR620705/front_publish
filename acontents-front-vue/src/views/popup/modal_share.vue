<template>

	<div>

		<!-- modal : 모달 -->
		<app-modal title="샘플 모달"
				:visible.sync="isOpen">
		<div class="modal">
			<div class="modal-mask"></div>
			<div class="modal-dialog">

				<div class="modal-header">
					<h1>공유하기</h1>
					<button type="button"
							class="modal-header-close"
							@click="openPop">
						<span class="hide">닫기</span>
					</button>
				</div>

				<div class="modal-body">

					<!-- modal-share : 공유하기 팝업// -->
					<div class="modal-share">
						<ul class="link">
							<li class="kakaotalk"><a href="javascript:;">카카오톡</a></li>
							<li class="kakaostory"><a href="javascript:;">카카오스토리</a></li>
							<li class="facebook"><a href="javascript:;">페이스북</a></li>
							<li class="instagram"><a href="javascript:;">인스타그램</a></li>
							<li class="band"><a href="javascript:;">밴드</a></li>
							<li class="url"><a href="javascript:;">URL 복사</a></li>
						</ul>
						<div class="toggle"><!-- 활성화 : active 클래스 추가 -->
							<button type="button" class="toggle-btn">
								SNS공유안내
								<span class="hide">열기/닫기</span>
							</button>
							<div class="toggle-cont">
								<p>한국암웨이의 amway.co.kr에서 서비스 되는 일체의 콘텐츠에 대한 지적 재산권은 한국암웨이㈜에 있으며, 임의로 자료를 수정/변경하여 사용하거나, 기타 개인의 영리 목적으로 사용할 경우에는 지적 재산권 침해에 해당하는 사안으로, 그 모든 법적 책임은 콘텐츠를 불법으로 남용한 개인 또는 단체에 있습니다.<br><br>
								모든 자료는 원저작자의 요청이나 한국암웨이의 사정에 따라 예고 없이 삭제될 수 있습니다.</p>
							</div>
						</div>
					</div>
					<!-- //modal-share : 공유하기 팝업 -->

					<button type="button" class="modal-close">닫기</button>
				</div>
			</div>
		</div>
		</app-modal>
		<!--// modal : 모달 -->

	</div>
    
</template>

<script>

export default {
  name: 'Modal_share',
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
