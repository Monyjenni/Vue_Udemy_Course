const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: '',
      goals: [],
    };
  },
  methods: {
    addGoal () {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      // splice is used to find the index and remove them by this method
      this.goals.splice(idx, 1)
    }
  }
});

app.mount('#user-goals');
