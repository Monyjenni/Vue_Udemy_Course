<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('stored-resources')">
        Stored Resource
      </base-button>
      <base-button @click="setSelectedTab('add-resource')">Add Resource</base-button>
    </base-card>
    <component :is="setSelectedTab"></component>
  </div>
</template>

<script>
import AddResource from "./AddResource.vue";
import StoredResource from "./StoredResource.vue";
export default {
  components: { AddResource, StoredResource },
  data() {
    return {
      selectedTab: "stored-resources",
    };
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>

<style scoped></style>
