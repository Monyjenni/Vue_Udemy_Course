<template>
  <li>
    <h2>
      {{ name }} {{ friendIsFavorite ? '(Hey this is fav)' : '' }}
      <button @click="toggleFavorite">{{ detailsAreVisible ? 'Hide' : 'Toggle' }}</button>
      <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ phoneNumber }}</li>
        <li><strong>Email:</strong> {{ emailAddress }}</li>
      </ul>
    </h2>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
      // friend: {
      //   id: 'Mony',
      //   name: 'Sovan Mony',
      //   phone: '12345678',
      //   email: 'chansovanmony@gmail.com'
      // },
      friendIsFavorite : this.isFavorite,
    }

  },
  props: {
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
      // validator: function(value) {
      //   return value === '1' || value === '0'
      // }
    }

  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.friendIsFavorite = !this.friendIsFavorite
    }
  }
}
</script>

<style scoped></style>