const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "jen yoeun",
          name: "jen yoeun",
          phone: "01234567",
          email: "jen@gmail.com",
        },
      ],
    };
  },
});
//always contain dash to make up multi words
app.component("friend-contact", {
  template: `
  <li>
  <h2>{{ friend.name }}</h2>
  <button @click="toggleDetails()">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong> {{ friend.phone }}</li>
    <li><strong>Email:</strong> {{ friend.email }}</li>
  </ul>
</li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: 
      {
        id: "mony yoeun",
        name: "mony yoeun",
        phone: "01234567",
        email: "mony@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
