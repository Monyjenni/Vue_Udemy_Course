<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps["another-prop"] }}</p></template
      >
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";
import CourseGoals from "./components/CourseGoal.vue";
export default {
  data() {
    return {
      activeUser: {
        name: "Chansovanmony Yoeun",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  components: {
    "the-header": TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
