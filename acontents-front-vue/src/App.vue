<template>
  <div id="App" class="app">
    <template v-if="$route.meta.isIndex">
      <router-view/>
    </template>
    <template v-else>
      <Layout />
    </template>

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