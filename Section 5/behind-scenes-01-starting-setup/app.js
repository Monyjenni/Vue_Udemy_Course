const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.mes sage = this.currentUserInput;
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText)
    },
  },
  beforeCreate() {
    console.log('beforeCreate()')
  },
  created() {
    console.log('create()')
  },
  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate()')
  },
  updated() {
    console.log('updated()')
  },
  beforeUnmount() {
    console.log('beforeUnmount()')
  },
  unmounted() {
    console.log('unmounted()')
  },
});
app.mount("#app");

setTimeout(() => {
  app.unmount();
},3000)



const app2 = Vue.createApp({
  template: `
  <p> {{ favoriteMeal }} </p>
  `,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app2.mount("#app2");

const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const handler = {
  set(target, key, value) {
    // console.log(target,key,value)
    if (key === "message") {
      target.longMessage = value + "World";
    }
    target.message = value;
  },
};
//proxy wrap data msg
const proxy = new Proxy(data, handler);
// just wanna trigger when message is changed from the previous
proxy.message = "Hello!!!";
// console.log("new one", proxy.longMessage);

// let message = 'Hello';

// let longMessage = message + 'Monie';

// console.log(longMessage);

// message= 'Hello!!!'

// console.log(longMessage)
