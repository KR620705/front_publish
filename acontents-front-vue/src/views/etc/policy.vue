<template>
  <div class="etc policy">
    
    <section class="wrap-title">
          <div class="titlearea">
            <h2 class="h2-title">개인정보처리방법</h2>
            <p class="text-box">A Content 서비스를 보다 원활히 이용하실 수 있도록 도움을 드립니다.</p>
          </div>
    </section>
    
    <section class="wrap-select-box">
        <select class="select-box">
          <option selected>이전내용보기</option>
          <option>210505</option>
          <option>210325</option>
        </select>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Policy',
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