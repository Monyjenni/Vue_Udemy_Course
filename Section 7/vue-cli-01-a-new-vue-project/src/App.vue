<template>
  <section>
    <header>
      <h2>My Friends </h2>
    </header>
    <new-friend @add-contact="addContact"></new-friend>
    <ul>
      <friend-contact v-for="friend in friends" :key="friend.id"  :id="friend.id" :name="friend.name" :phone-number="friend.phone" :email-address="friend.email" :is-favorite="friend.isFavorite" @toggle-favorite="toggleFavoriteStatus" @delete="deleteContact"/>
    </ul>
  </section>
</template>

<script>
import FriendContact from './components/FriendContact.vue'
import NewFriend from './components/NewFriend.vue'
export default {
  components: { FriendContact, NewFriend },
  data() {
    return {
      friends: [
        {
          id: 'Mony',
          name: 'Sovan Mony',
          phone: '12345678',
          email: 'chansovanmony@gmail.com',
          isFavorite: true
        },
        {
          id: 'Jen',
          name: 'Jennie',
          phone: '12345678',
          email: 'jen@gmail.com',
          isFavorite: false
        }
      ]
    }
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const identifiedFriend = this.friends.find(friend => friend.id === friendId)
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite
      
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      }
      this.friends.push(newFriendContact)

    },
    deleteContact(friendId) {
      // if friend.id not equal to friendId it returns false once it's falsy it will filter
      // it will generate the new array minus friendId
      this.friends = this.friends.filter(friend => friend.id !== friendId )
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

#app li,
#app form {
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
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>