const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const data = {
  message: 'Hello!',
  longMessage: 'Hello! World!'
}

const handler = {
  set(target, key, value) {
    // console.log(target,key,value)
    if(key === 'message') {
      target.longMessage = value + 'World'
    }
    target.message = value;
  }
}
//proxy wrap data msg
const proxy = new Proxy(data,handler );
// just wanna trigger when message is changed from the previous
proxy.message = 'Hello!!!'
console.log('new one', proxy.longMessage)

// let message = 'Hello';


// let longMessage = message + 'Monie';

// console.log(longMessage);

// message= 'Hello!!!'

// console.log(longMessage)

