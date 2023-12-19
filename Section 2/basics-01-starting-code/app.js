const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink : 'https://vuejs.org/guide/quick-start.html'
    };
    
  }
});

//control by mounting id mean connect vue
app.mount('#user-goal');
