<template>
  <div class="search search">
    <div class="input_wrap">
      <button type="button" class="btn-search-close">닫기</button>
      <input type="text" class="search-input" placeholder="검색어를 입력하세요">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
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