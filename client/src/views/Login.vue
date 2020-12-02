<template>
  <div class="form">
    <form action="/feed">
      <label for="">Email</label>
      <input type="email" id="email" required />
      <label for="">Password</label>
      <input type="password" id="password" required />
      <button @click.prevent="actualLogin" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
// import User from "@/components/User.vue";
import session from "@/models/session";
import { realLogin } from "@/models/users";
export default {
  name: "Login",
  data() {
    return {
      session,
      logged: Boolean,
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
    actualLogin() {
      var e = document.getElementById("email").value;
      var p = document.getElementById("password").value;
      var data = { email: e, password: p };
      if (realLogin(data)) {
        session.addNotification("Yay you logged in", "success");
        this.$router.push("Feed");
      }
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
