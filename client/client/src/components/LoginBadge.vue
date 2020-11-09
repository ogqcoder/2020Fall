<template>
  <div>
    <div class="media" v-if="session.user">
      <div class="media-left">
        <figure class="image is-48x48">
          <img
            src="https://bulma.io/images/placeholders/96x96.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{ session.user.name }}</p>
        <p class="subtitle is-6">{{ session.user.handle }}</p>
      </div>
    </div>

    <div class="buttons" v-else>
      <a class="button is-primary">
        <router-link class="navbar-item" to="/register">Register</router-link>
      </a>

      <a class="button is-light"
        ><router-link class="navbar-item" to="/login">Login</router-link></a
      >
    </div>
  </div>
</template>


<script>
import session from "@/models/session";

export default {
  data() {
    return {
      skill: "Hello",
      session,
    };
  },

  methods: {
    king() {
      console.log("hello");
    },
  },
};
</script>

<style>
</style>