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
export default {
  name: "User",
  props: {
    be: String,
    login: Function,
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
