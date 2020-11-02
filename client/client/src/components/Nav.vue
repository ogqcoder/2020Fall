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
        <a class="navbar-item" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

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

      <div v-if="!$auth.loading" id="navbarBasicExample" class="navbar-menu">
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
            <div class="buttons" v-if="!$auth.loading">
              <a v-if="!$auth.isAuthenticated" class="button is-primary">
                <router-link class="navbar-item" to="/register"
                  >Register</router-link
                >
              </a>
              <p class="navbar-item" v-if="$auth.isAuthenticated">
                Welcome {{ $auth.user.nickname }}
              </p>
              <a class="button is-light"
                ><router-link class="navbar-item" to="/login">
                  <div v-if="!$auth.loading">
                    <!-- show login when not authenticated -->
                    <a
                      v-if="!$auth.isAuthenticated"
                      @click="login"
                      class="button is-dark"
                      ><strong>Sign in</strong></a
                    >
                    <!-- show logout when authenticated -->
                    <a
                      v-if="$auth.isAuthenticated"
                      @click="logout"
                      class="button is-dark"
                      ><strong>Log out</strong></a
                    >
                  </div></router-link
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
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
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
