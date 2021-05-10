<template>
  <aside class="sidemenu">

    <div class="mask"
         @click.self="asideClose"></div>

    <div class="sidemenu-body">
      <div class="sidemenu-header">
        <div class="logo">로고</div>
        <h5>사이드메뉴</h5>
        <button type="button"
                class="btn"
                @click="asideClose"
                title="사이드메뉴닫기">
          <span>X</span>
        </button>
      </div>

      <div class="sidemenu-list accordion">
        <ul>
          <li>
            <div>
              <h3>어바웃 암웨이</h3>
            </div>
          </li>
          <li>
            <div>
              <h3>브랜드</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </aside>
</template>


<script>
export default {
  components: {

  },
  data: function () {
    return {

    }
  },
  mounted() {

  },
  methods:{
    asideClose() {
      this.$store.dispatch('commitIsAsideOpen', {value: false});
    }
  },
}
</script>
