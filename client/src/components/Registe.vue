<template>
  <div class="register">
    <div class="form">
      <form action="">
        <label for="uname">Username</label>
        <input type="text" name="uname" />
        <label for="email"></label>
        <input type="text" name="email" />
        <label for="">Password</label>
        <input type="password" />
        <label for="">Confirm Password</label>
        <input type="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  props: {
    be: String,
  },
  data() {
    return {
      skill: "Hello",
    };
  },

  methods: {
    king() {
      console.log("hello");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
