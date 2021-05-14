<template>
  <div :class="`body ${($store.state.isAsideOpen) ? 'aside-open' : ''}`">
    <div v-if="isHeader">
      <!-- header 있음 -->
    </div>
    <div v-else>
      <!-- header 없음 -->
    </div>
    <Header />

    <div class="container">
      <Sidemenu />
      <transition name="slide-fade">
      <router-view :key="$route.fullPath"/>
      </transition>
    </div>

    <Footer />
  </div>
</template>

<script>
import Sidemenu from '@/components/base/Sidemenu.component.vue';
import Header from "./Header.component";
import Footer from "./Footer.component";

export default {
  components: {
    Header,
    Footer,
    Sidemenu
  },
  data: function () {
    return {
      username: '',
      isHeader: true,
    }
  },
  mounted() {

  }
}
</script>
