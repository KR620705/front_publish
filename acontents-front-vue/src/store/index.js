import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAsideOpen: false,
    apiBaseUrl: '',
    fileSiteUrl: '',
  },
  mutations: {
    // aside menu show/hide
    setIsAsideOpen(state, options) {
      state.isAsideOpen = options.value;
    },
  },
  actions: {
    apiError(context, param) {
      if (param.err.response && param.err.response.data.error === "invalid_token") {
        router.push('/');
      } else {
        console.log('error', param.err)
      }
    },
    commitIsAsideOpen ({commit}, options) {
      commit('setIsAsideOpen', options);
    },
  },
  modules: {
  }
})
