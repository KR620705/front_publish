<template>
  <div :class="`body ${($store.state.isAsideOpen) ? 'aside-open' : ''}`">
    <div v-if="$route.meta.isMainHeader">
      <!-- Main header -->
      <Header />
    </div>
    <div v-else>
      <!-- Sub header -->
      <SubHeader />
    </div>

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
import SubHeader from "./Header.sub.component";
import Footer from "./Footer.component";

export default {
  components: {
    Header,
    SubHeader,
    Footer,
    Sidemenu
  },
  data: function () {
    return {
      username: '',
    }
  },
  mounted() {

  }
}
</script>
