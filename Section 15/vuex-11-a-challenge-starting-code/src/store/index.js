import { createStore } from 'vuex';
import productsModule from './modules/products.js'
import cartModule from './modules/cart.js'

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false,
    }
  },
  mutations: {
    methods: {
      login() {
        state.isLoggedIn = true;
      },
      logout() {
        state.isLoggedIn = false;
      },
    },
  },
  actions: {
    login(context) {
      context.commit('login')
    },
    logout(context) {
      context.commit('logout')
    }
  },
  getters: {
    isAuthenticated (state) {
      return state.isLoggedIn;
    }
  }
});

export default store;