<template>
  <div>
    <base-card>
      <base-button
        @click="setSelectedTab('stored-resources')"
        :mode="storedResButtonMode"
      >
        Stored Resource
      </base-button>
      <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode"
        >Add Resource</base-button
      >
    </base-card>
    <keep-alive>
      <component :is="setSelectedTab"></component>
    </keep-alive>
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
      storedResources: [
        {
          id: "official-guide",
          title: "Official Guide",
          description: "The official vue.js documentations.",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "Google",
          description: "Learn to google...",
          link: "https://google.org",
        },
      ],
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === "stored-resource" ? null : "flat";
    },
    addResButtonMode() {
      return this.selectedTab === "add-resource" ? null : "flat";
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = "stored-resources";
    },
    removeResource(resId) {
      const resIndex = this.storedResources.findIndex((res) => res.id === resId);
      this.storedResources.splice(resIndex, 1);
    },
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource,
    };
  },
};
</script>

<style scoped></style>
