<template>
  <div id="app">
    <Nav />
    <div class="content">
      <h1>Do Better For Yourself</h1>
      <p>
        We of get fit or go home are here to add years to your prime and help
        you stay there until you DIE
      </p>
    </div>
    <div class="image">
      <img src="./assets/workout.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>

<style>
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

li {
  list-style: none;
}
</style>
<style scoped>
img {
  width: 100%;
  height: 100%;
  z-index: -2;
  position: absolute;
  left: 0;
  top: 0;
  object-fit: cover;
}
.content {
  color: white;
}
</style>
