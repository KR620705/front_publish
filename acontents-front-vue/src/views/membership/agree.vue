<template>
  <div class="membership agree">
    <h1>A-Content<br />
        서비스 약관에 동의해 주세요.</h1>

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
  name: 'Agree',
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
      this.$router.push('/checkuser');
    }
  },
}
</script>
