<template>
  <div class="hello">
    <!-- <ul class="navi">
      <li><a href="">Home</a></li>
      <li><a href="">plan</a></li>
      <li><a href="">messages</a></li>
      <span>1</span>
      <li><a href="">Contact</a></li>
      <li><a href="#about-us">About us</a></li>
    </ul> -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div> -->

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item is-large"> Workout Tracking </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          style=""
        >
          <span style="color: black" aria-hidden="true"></span>
          <span style="color: black" aria-hidden="true"></span>
          <span style="color: black" aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>

          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/feed">Feed</router-link>
          <router-link class="navbar-item" to="/admin">Admin</router-link>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <router-link class="navbar-item" to="/register"
                  >Register</router-link
                >
              </a>

              <a class="button is-light"
                ><router-link class="navbar-item" to="/login"
                  >Login</router-link
                ></a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Nav",
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
    expandNav() {
      document.getElementById();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navi {
  display: flex;
  margin: 0;
  height: 50px;
  background-color: rgb(85, 73, 73);
  color: white;
  align-items: center;
}
.navi li {
  margin: 0 10px;
  padding: 10px;
  align-self: center;
}
.navi li a {
  color: white;
  text-decoration: none;
}
.navi li:hover {
  background: rgb(110, 52, 52);
}

span {
  color: white;
  background-color: red;
  font-size: 0.5em;
  z-index: 3;
  transform: translate(-21px, -9px);
}
</style>
