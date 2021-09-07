<template>
  <section class="columns is-centered pt-6">
    <div class="column is-6-desktop is-4-fullhd">
      <div class="card-header-title">
        <div class="content"><h2>Login</h2></div>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit="onLogin">
            <b-field label="Email">
              <b-input v-model="form.email" name="email" autofocus />
            </b-field>

            <b-field label="Password">
              <b-input
                v-model="form.password"
                type="password"
                name="password"
                password-reveal
              />
            </b-field>

            <div class="columns">
              <div class="column">
                <b-checkbox v-model="form.isRemember">Remember Me</b-checkbox>
              </div>
              <router-link to="/register">Forgot Your Password?</router-link>
            </div>

            <div class="buttons is-justify-content-flex-end">
              <b-button @click="onRegister">Register</b-button>
              <b-button type="is-primary" @click="onLogin">Login</b-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import auth from "../../../services/firebase/auth";

export default {
  data() {
    return {
      form: {
        email: null,
        password: null,
        isRemember: false,
      },
    };
  },
  methods: {
    onLogin() {
      auth
        .login(this.form)
        .then((user) => {
          this.onLoginSuccess(user);
        })
        .catch((error) => {
          console.log("ini error", error);
        });
    },
    onLoginSuccess(user) {
      this.$store.dispatch("auth/login", user).then(() => {
        this.$router
          .push({
            name: "home",
          })
          .catch(() => {});
      });
    },
    onRegister() {
      this.$router.push({
        name: "register",
      });
    },
  },
};
</script>
