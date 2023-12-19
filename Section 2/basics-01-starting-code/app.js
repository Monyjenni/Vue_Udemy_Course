const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      vueLink : 'https://vuejs.org/guide/quick-start.html'
    };
    
  },
  methods: {
    outputGoal () {
      const randomNumber = Math.random();
      if(randomNumber < 0.5) {
        return 'Learn Vue!';
      }else {
        return 'Master Vue!';
      }
    }
  }
});

//control by mounting id mean connect vue
app.mount('#user-goal');
