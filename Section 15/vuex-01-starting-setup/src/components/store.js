import { createStore } from 'vuex';
const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },
    increase(state, payload) {
      console.log(state);
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context ) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000); 
  },
    increase(context, payload) {
      context.commit('increase', payload)
      console.log(context)
    },
    login() {}
  },
  getters: {
    testAuth(state) {
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter
      if(finalCounter < 0){
        return 0;
      }
      if(finalCounter > 100){
        return finalCounter;
      }
      return finalCounter;
    },
  }
}

