<template>
  <li>
    <h2>
      {{ name }} {{ isFavorite ? '(Favorite)' : '' }} </h2>
    <button @click="toggleFavorite">{{ detailsAreVisible ? 'Hide' : 'Toggle' }}</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }}</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete',id)">Delete</button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsAreVisible: false,
    }

  },
  props: {
    id: {
      type: String,
      required: true
    },
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
  // tell what we have emit
  // emits: {
  //   'toggle-favorite': function (id) {
  //     if (id) {
  //       return true
  //     } else {
  //       console.warn('Id is missing')
  //       return false
  //     }
  //   }
  // },
  emits: ['toggle-favorite', 'delete'],
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
  }
}
</script>

<style scoped></style>