  import Vue from 'vue'
  import Vuex from 'vuex'

  Vue.use(Vuex)

  export default new Vuex.Store({
    state: {
      auth_token: '',
      is_authenticated: true
    },
    mutations: {
      saveAuthToken(state, token) {
        state.auth_token = token
        state.is_authenticated = true
      },

    },
    actions: {
      saveAuth(context, token) {
        context.commit('saveAuthToken', token)
      }
    },
    getters: {
      is_authenticated(state) {
        return state.is_authenticated;
      }
    }
  })