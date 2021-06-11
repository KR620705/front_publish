<template>
  <div class="main landing">
    <section>      
      <div class="post bg1">
        <div class="wrap-text">
          <h2>Amway 비즈니스를 위한 새로운 콘텐츠 플랫폼</h2>
          <p>A Content를 통해, 계속 업데이트 되는 맞춤 영상을 제공받아보세요.</p>
        </div>
        <div class="wrap-bottom-btn">
          <button type="button" class="btn red">ABO 로그인</button>
        </div>
      </div>
      <div class="post bg2">
        <div class="wrap-text">
          <h2>다양한 콘텐츠</h2>
          <p>제품 및 비즈니스 영상을 시작으로, 다양한 형식의 콘텐츠로 개편 될 예정입니다.</p>
        </div>
      </div>
      <div class="post bg3">
        <div class="wrap-text">
          <h2>맞춤형 영상</h2>
          <p>영상 콘텐츠가 신규, 인기, 선호 카테고리에 따라 맞춤형으로 알맞게 제공됩니다.</p>
        </div>
      </div>
      <div class="post bg4">
        <div class="wrap-text">
          <h2>쉬운 공유하기</h2>
          <p>카카오톡, 페이스북, 트위터 등을 통해 원하는 영상 콘텐츠를 공유할 수 있어요.</p>
        </div>
      </div>
      <div class="post bg5">
        <div class="wrap-text">
          <h2>편리한 즐겨찾기</h2>
          <p>원하는 영상을 즐겨찾기 해 나만의 콘텐츠를 모아볼 수 있어요.</p>
        </div>
      </div>
      <div class="post bg6">
        <div class="wrap-text">
          <h2>다양한 디바이스</h2>
          <p>스마트폰, 태블릿에서부터, PC나 노트북까지 언제 어디서나 자유롭게 스트리밍해 보세요</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Landing',
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