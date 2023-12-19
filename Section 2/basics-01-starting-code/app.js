const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!'
    };
    
  }
});

//control by mounting id mean connect vue
app.mount('#user-goal');
