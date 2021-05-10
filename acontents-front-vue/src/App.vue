<template>
  <div id="App" class="app">
    <!-- <template v-if="$route.meta.isIndex">
      <div class="logo">
        <router-link to="/">
          <span>로고</span>
        </router-link>
      </div>

      <router-view/>
    </template>
    <template v-else>
    </template> -->
      <Layout />
  </div>
</template>
<script>
import Layout from '@/components/base/Layout.component.vue'
export default {
  name: 'App',
  components: {
    Layout
  },
}
</script>