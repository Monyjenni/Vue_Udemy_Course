const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'Finish the course and learn Vue!',
      courseGoalB: '<h2>Master the course and learn Vue!<h2>',
      vueLink : 'https://vuejs.org/guide/quick-start.html'
    };
    
  },
  methods: {
    outputGoal () {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return this.courseGoalA;
      }else {
        return this.courseGoalB;
      }
    }
  }
});

//control by mounting id mean connect vue
app.mount('#user-goal');
