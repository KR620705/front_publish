<template>
  <div class="etc loading">

    <section class="wrap-loading">
      <div class="wrap-svg">
      <!-- 로딩 애니메이션 SVG -->
        <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="-30 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
          <circle fill="#fff" stroke="none" cx="6" cy="50" r="4">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"/>    
          </circle>
          <circle fill="#fff" stroke="none" cx="20" cy="50" r="4">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite" 
              begin="0.2"/>       
          </circle>
          <circle fill="#fff" stroke="none" cx="34" cy="50" r="4">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite" 
              begin="0.3"/>     
          </circle>
        </svg>
      <!-- //로딩 애니메이션 SVG -->
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Loading',
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