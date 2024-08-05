import { createStore } from 'vuex';
import rootMutations from './mutations.js'
import rootActions from './actions.js'
const store = createStore({
  modules: { 
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  //function
  mutations: rootMutations,
  //caller
  actions: rootActions,
  //getter?
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn
    }
  },
})

export default store;