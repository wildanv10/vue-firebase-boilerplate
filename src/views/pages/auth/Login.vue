<template>
  <section class="columns is-centered pt-6">
    <div class="column is-6-desktop is-4-fullhd">
      <div class="card-header-title">
        <div class="content"><h2>Login</h2></div>
      </div>
      <div class="card-content">
        <div class="content">
          <!-- notification section -->
          <b-notification
            role="alert"
            aria-close-label="Close notification"
            :active.sync="notification.isActive"
            :type="`${notification.typePrimary} ${notification.typeSecondary}`"
            :message="notification.message"
          />

          <!-- form section -->
          <form @submit="onLogin">
            <b-field label="Email">
              <b-input
                v-model="form.email"
                type="email"
                name="email"
                autofocus
              />
            </b-field>

            <b-field label="Password">
              <b-input
                v-model="form.password"
                type="password"
                name="password"
                password-reveal
                @keydown.enter="onLogin"
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
              <b-button
                type="is-primary"
                @click="onLogin"
                :loading="isSubmit"
                :disabled="isSubmit"
              >
                Login
              </b-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import auth from "../../../services/firebase/auth";
import notification from "../../../mixins/notification";
import { getErrorMessage } from "../../../helpers/firebaseApiError";

export default {
  mixins: [notification],
  data() {
    return {
      notification: {
        isActive: false,
        typePrimary: "is-danger",
        typeSecondary: "is-light",
        message: null,
      },
      isSubmit: false,
      form: {
        email: null,
        password: null,
        isRemember: false,
      },
    };
  },
  methods: {
    onLogin() {
      this.isSubmit = true;
      auth
        .login(this.form)
        .then((user) => {
          this.onLoginSuccess(user);
        })
        .catch((error) => {
          this.showNotification(getErrorMessage(error.code));
        })
        .finally(() => (this.isSubmit = false));
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
