<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <a @click="onLogout">Logout</a>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store
        .dispatch("auth/setAuthenticated", false)
        .then((isAuthenticated) => {
          if (!isAuthenticated) {
            this.$router.push({
              name: "login",
            });
          }
        });
    },
  },
};
</script>
