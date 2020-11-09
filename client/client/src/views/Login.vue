<template>
  <div class="login">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Register /> -->
    <User :login="login" />
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
import User from "@/components/User.vue";
import session from "@/models/session";
export default {
  name: "Login",
  data: () => {
    return {
      session,
    };
  },
  components: {
    User,
  },
  methods: {
    login() {
      session.user = {
        name: "G Smith",
        handle: "unlimited_g",
      };
      session.addNotification("Yay you logged in", "success");
      this.$router.push("Feed");
    },
  },
};
</script>
