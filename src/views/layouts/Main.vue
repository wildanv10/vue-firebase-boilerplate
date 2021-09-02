<template>
  <div>
    <Menu v-if="hasMenu || isAuthenticated" />
    <router-view />
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
export default {
  components: {
    Menu,
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.isAuthenticated;
    },
    hasMenu() {
      return this.$route.meta.hasMenu ? true : false;
    },
  },
};
</script>
