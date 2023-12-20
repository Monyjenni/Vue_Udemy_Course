const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // input from the event 
    setName(event,lastName) {
      this.name = event.target.value + ' ' + lastName;
    }
  },
});

app.mount("#events");
