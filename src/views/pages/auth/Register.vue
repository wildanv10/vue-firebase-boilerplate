<template>
  <section class="columns is-centered pt-6">
    <div class="column is-6-desktop is-4-fullhd">
      <div class="card-header-title">
        <div class="content"><h2>Register</h2></div>
      </div>
      <div class="card-content">
        <div class="content">
          <form @submit="onSubmit">
            <b-field label="Name">
              <b-input v-model="form.name" name="name" autofocus />
            </b-field>

            <b-field label="Email">
              <b-input v-model="form.email" name="email" />
            </b-field>

            <b-field label="Password">
              <b-input
                v-model="form.password"
                type="password"
                name="password"
              />
            </b-field>

            <b-field label="Confirm Password">
              <b-input
                v-model="form.passwordConfirm"
                type="password"
                name="passwordConfirm"
              />
            </b-field>

            <div class="buttons is-justify-content-flex-end">
              <span class="pr-2">Already have an account?</span>
              <b-button @click="onLogin">Login</b-button>
              <b-button type="is-primary" @click="onSubmit">Register</b-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        passwordConfirm: null,
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("register", this.form);
    },
    onLogin() {
      this.$router.push({
        name: "login",
      });
    },
  },
};
</script>
