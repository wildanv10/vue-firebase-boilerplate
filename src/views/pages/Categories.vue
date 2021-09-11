<template>
  <div>
    <h1 class="has-text-left is-bold is-size-4 p-5">
      This is list of categories retrieved from database using Realtime
      Database:
    </h1>

    <div class="columns is-multiline">
      <div
        v-for="category in categories"
        :key="category.name"
        class="column is-half"
      >
        <div class="card">
          <div class="card-header has-background-grey-lighter">
            <p class="card-header-title">{{ category.name }}</p>
          </div>
          <div class="card-content">
            <div class="content">
              {{ category.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="categories.length < 1" class="has-text-centered">
      No category found.
    </div>
  </div>
</template>

<script>
import { readUserData } from "../../services/firebase/database";

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    async getCategories() {
      const result = await readUserData();
      this.categories = result || [];
    },
  },
};
</script>
