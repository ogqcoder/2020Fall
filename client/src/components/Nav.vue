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

    <nav
      onresize="resize()"
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item is-large"> Workout Tracking </a>

        <a
          @click="expandNav()"
          role="button"
          class="navbar-burger burger"
          id="burger"
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
        <div class="navbar-start" id="start">
          <router-link class="navbar-item" to="/">Home</router-link>

          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/feed">Feed</router-link>
          <router-link class="navbar-item" to="/admin">Admin</router-link>
          <router-link class="navbar-item" to="/profile">Profile</router-link>
          <router-link class="navbar-item" to="/autoc"
            >Autocomplete</router-link
          >
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link"> More </a>

            <div class="navbar-dropdown">
              <a class="navbar-item"> About </a>
              <a class="navbar-item"> Jobs </a>
              <a class="navbar-item"> Contact </a>
              <hr class="navbar-divider" />
              <a class="navbar-item"> Report an issue </a>
            </div>
          </div> -->
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <LoginBadge />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LoginBadge from "@/components/LoginBadge";
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
      var navbarStart = document.getElementById("navbarBasicExample");
      // var navbarBurger = document.getElementById("burger");
      // var open = false;

      if (navbarStart.classList.contains("dontshow")) {
        navbarStart.classList.remove("dontshow");
        navbarStart.classList.add("show");
      } else {
        navbarStart.classList.remove("show");
        navbarStart.classList.add("dontshow");
      }
    },
    resize() {
      var navbarStart = document.getElementById("navbarBasicExample");
      if (window.innerWidth > 1000) {
        navbarStart.classList.remove("show");
        navbarStart.classList.remove("dontshow");
      }
    },
  },
  components: {
    LoginBadge,
  },
  mounted: function () {
    window.addEventListener("resize", this.resize);
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
.show {
  float: none;
  display: block;
  text-align: left;
}
.dontshow {
  display: none;
}
</style>
