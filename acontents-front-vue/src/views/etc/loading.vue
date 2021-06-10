<template>
  <div class="etc loading">

    <section class="wrap-loading">

      <!-- 로딩 애니메이션 -->
      <div class="loader">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
        <div class="bar4"></div>
        <div class="bar5"></div>
        <div class="bar6"></div>
      </div>
      <!-- //로딩 애니메이션 -->

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