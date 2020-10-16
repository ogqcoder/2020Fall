<template>
  <div class="register">
    <div class="container">
      <form action="#">
        <label for="">First Name</label>
        <input type="text" name="fname" id="" />
        <label for="">Last Name</label>
        <input type="text" name="" id="" />
        <label for="">Email</label>
        <input type="email" name="email" id="" />
        <label for="">Username</label>
        <input type="text" name="uname" id="" />
        <label for="">Password</label>
        <input type="text" name="password" id="" />
        <label for="">Confirm Password</label>
        <input type="text" name="" id="" />
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
// import User from "@/components/User.vue";
export default {
  name: "Register",
  components: {},
};
</script>

<style scoped>
/* input {
  display: block;
  text-align: center;
} */

form {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.register {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(20%, 30%);
}
form {
  width: 50%;
}
form input {
  display: block;
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
  outline: none;
  font-size: 20px;
}
</style>