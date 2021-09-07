<template>
  <div>
    <Menu v-if="hasMenu" />
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
    hasMenu() {
      return this.$route.meta.hasMenu == false ? false : true;
    },
  },
};
</script>
