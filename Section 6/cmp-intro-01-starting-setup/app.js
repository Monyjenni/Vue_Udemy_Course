const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: 'mony yoeun',
          name: 'mony yoeun',
          phone: '01234567',
          email: 'mony@gmail.com'
        },
        {
          id: 'jen yoeun',
          name: 'jen yoeun',
          phone: '01234567',
          email: 'jen@gmail.com'
        }
      ]
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible =! this.detailsAreVisible
    }
  }
})
app.mount('#app')