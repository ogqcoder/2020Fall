
<template>
  <div id="app">
    <Nav />
  </div>
</template>
<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
import Nav from "@/components/Nav.vue";
import "bulma/css/bulma.css";
export default {
  name: "Login",
  components: {
    Nav,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin: 0 50px; */
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
html,
body {
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
</style>
  