<template>
  <div>
    <b-navbar v-if="isAuthenticated" fixed-top>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>

      <!-- authenticated user -->
      <template #start>
        <b-navbar-item tag="router-link" to="/"> Home </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item tag="router-link" to="/about"> About </b-navbar-item>
          <b-navbar-item tag="router-link" to="/profile">
            Profile
          </b-navbar-item>
        </b-navbar-dropdown>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-light" @click="onLogout"> Log out </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>

    <b-navbar v-if="!isAuthenticated">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          />
        </b-navbar-item>
      </template>

      <!-- unauthenticated user -->
      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <router-link class="button is-primary" to="/register">
              <strong>Sign up</strong>
            </router-link>
            <router-link class="button is-light" to="login">
              Log in
            </router-link>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
import auth from "../../services/firebase/auth";

export default {
  methods: {
    onLogout() {
      auth
        .logout()
        .then(() => {
          this.$store.dispatch("auth/logout").then(() => {
            this.$router
              .push({
                name: "home",
              })
              .catch(() => {});
          });
        })
        .catch((error) => console.log("ini error", error));
    },
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.user.accessToken ? true : false;
    },
  },
};
</script>
