<template>
  <div class="login">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Register /> -->
    <User />
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
import User from "@/components/User.vue";
export default {
  name: "Login",
  components: {
    User,
  },
};
</script>
