<template>
  <div class="etc error">
    
    <section class="message-error">
      <dl>
        <dt></dt>
        <dd>
          <p class="first">404 ERROR</p>
          <p class="second">요청하신 페이지를 찾을 수 없습니다.</p>
          <p class="third">
            서비스 이용에 불편을 드려 죄송합니다. 
            궁금한 점은 고객센터 (1588-0080)으로 
            문의해 주시기 바랍니다.
          </p>
        </dd>
      </dl>
    </section>

    <section class="wrap-btn">
      <button tpye="button" class="btn round">홈으로 이동하기</button>
    </section>
    
  </div>
</template>

<script>
export default {
  name: 'Error',
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