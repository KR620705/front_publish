<template>
  <div :class="`body ${($store.state.isAsideOpen) ? 'aside-open' : ''}`">
    <header class="header type-main" v-if="$route.meta.isMainHeader"><!-- scroll시 fixed 클래스 추가 -->
      <!-- Main header -->
      <Header />
    </header>
    
    <header class="header type-sub" v-else>
      <!-- Sub header -->
      <SubHeader />
    </header>

    <div class="container">
      <Sidemenu />
      <transition name="slide-fade">
      <router-view :key="$route.fullPath"/>
      </transition>
    </div>

    <div v-if="$route.meta.isFooter">
    </div>

    <div v-else>
      <Footer />
    </div>
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
