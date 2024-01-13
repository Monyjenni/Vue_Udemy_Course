<template>
  <section>
    <header>
      <h1>My Friends </h1>
    </header>
    <ul>
      <friend-contact name="Mony" phone-number="12345" email-address="mony@gmail.com" />
      <friend-contact name="Jen" phone-number="1234567" email-address="jen@gmail.com"/>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
export default {
  components: { FriendContact },
  data() {
    return {
      friends: [
        {
          id: 'Mony',
          name: 'Sovan Mony',
          phone: '12345678',
          email: 'chansovanmony@gmail.com'
        },
        {
          id: 'Jen',
          name: 'Jennie',
          phone: '12345678',
          email: 'jen@gmail.com'
        }
      ]
    }
  }
}

</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #6c015e;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid red;
  background-color: red;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>