const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    outputFullname() {
      console.log('Running again ...')
      if(this.name === ''){
        return '';
      }
      return this.name + ' ' + 'Yoeun';
    },
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      console.log("It is working !");
      window.alert("Form is submitted ! ");
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    // input from the event
    setName(event) {
      this.name = event.target.value 
    },
    resetInput() {
      this.name = '';
    }
  },
});

app.mount("#events");
