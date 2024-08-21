import { createStore } from 'vuex';

import coachesModule from './modules/coaches/index.js'
import coaches from '../modules/coaches/index.js';

const store = createStore({
  modules:{
    coaches: coachesModule
  } 
});

export default store;