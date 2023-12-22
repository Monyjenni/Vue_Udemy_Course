const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      //fullname: "",
      lastName: ""
    };
  },
  watch: {
    counter(value){
      if(value > 50){
        const that = this
        setTimeout(function() {
          that.counter = 0;
        },2000);
      }
    }
    // when name changes will be triggered
    // name(value) {
    //   if(value === ''){
    //     this.fullname = '';
    //   }else{
    //     this.fullname = value + '' + this.lastName;
    //   }
      
    // },
    // lastName(value){
    //   if(value === ''){
    //     this.fullname = '';
    //   }else {
    //     this.fullname = value + ' ' + this.name
    //   }
  },
  computed: {
    //use is as data properties
    fullname(){
      console.log('running again from computed...')
      if(this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName
      
    }
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
