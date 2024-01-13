<template>
  <li>
    <h2>
      {{ name }} {{ friendIsFavorite === '1' ? '(Hey this is fav)' : '' }}
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
      friend: {
        id: 'Mony',
        name: 'Sovan Mony',
        phone: '12345678',
        email: 'chansovanmony@gmail.com'
      },
      friendIsFavorite : this.isFavorite,
    }

  },
  props: [
    'name',
    'phoneNumber',
    'emailAddress',
    'isFavorite'
  ],
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible

    },
    toggleFavorite() {
      if (this.friendIsFavorite == '1') {
        // can't change in child here
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    }

  }
}
</script>

<style scoped></style>