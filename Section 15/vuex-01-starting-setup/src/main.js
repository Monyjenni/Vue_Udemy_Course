import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const counterModule = {
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

const app = createApp(App);
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
  mutations: {
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    }
  },
  //caller
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true })
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false })
    }
  }
  ,
  //getter?
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn
    }
  },
})
app.use(store)
app.mount('#app');
