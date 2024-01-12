<template>
  <li>
    <h2>
      {{ friend.name }}
      <button @click="toggleDetails">Show Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{ friend.phone }}</li>
        <li><strong>Email:</strong> {{ friend.email }}</li>
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
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    }
  }
}
</script>

<style scoped></style>