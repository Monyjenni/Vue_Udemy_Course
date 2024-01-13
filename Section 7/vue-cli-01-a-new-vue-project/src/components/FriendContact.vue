<template>
  <li>
    <h2>
      {{ name }}
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
    }
  },
  props: [
    'name',
    'phoneNumber',
    'emailAddress'
  ],
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
      
    }
  }
}
</script>

<style scoped></style>