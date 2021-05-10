<template>
  <div class="check-user">
    <h1>사용자 선택</h1>

    <div>
      <button type="button"
              class="btn"
              @click="() => { $router.back(-1)}">
        <span>취소</span>
      </button>
      <button type="button"
              class="btn"
              @click="checkNext">
        <span>다음</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Checkuser',
  components: {
  },
  data: function () {
    return {

    }
  },
  mounted() {
    // page start

  },
  methods:{
    checkNext() {
      this.$router.push('/checkcategory');
    }
  },
}
</script>
