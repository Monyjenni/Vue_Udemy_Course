<template>
  <section>
    <h2>My Friends </h2>
    <ul>
      <friend-contact/>
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

</style>