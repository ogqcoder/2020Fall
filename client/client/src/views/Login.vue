<template>
  <div class="form">
    <form action="/feed">
      <label for="">Email</label>
      <input type="email" />
      <label for="">Password</label>
      <input type="password" />
      <button @click.prevent="login" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
// import User from "@/components/User.vue";
import session from "@/models/session";
export default {
  name: "Login",
  data: () => {
    return {
      session,
    };
  },
  components: {},
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
<style scoped>
.form {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form form {
  width: 50%;
}
.form input {
  display: block;
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
  font-size: 20px;
}
</style>
