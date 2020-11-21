<template>
  <div class="t">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">User Name</h1>
          <h2 class="subtitle">User Title</h2>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="columns">
        <div class="column is-two-fifths">
          <div class="profile-contain">
            <img class="profile-img" src="../assets/strength.jpg" alt="" />

            <div class="name">Shikamaru Nara</div>
            <div class="bio">
              Main Exercise:
              <p :key="i" v-for="(x, i) in profile[0].exercises">
                {{ x }}
              </p>
              calories burnt Today: 300
            </div>
            <div class="follow-group">
              <button>Follow</button>
              <p>followers: 30</p>
              <p>following: 30</p>
            </div>
          </div>
          <!-- div below is end of column is-two-fifths -->
        </div>
        <div style="" class="column">
          <!-- <div class="tree-container king">
            <img class="profile-img" src="../assets/strength.jpg" alt="" />

            <div class="name">Shikamaru Nara</div>
            <div class="bio">
              <p>Main Exercise: Running</p>
              calories burnt Today: 300
            </div>
            <div class="follow-group">
              <button>Follow</button>
              <p>followers: 30</p>
              <p>following: 30</p>
            </div>
          </div> -->
          <!-- div above is end of tree container -->
          <div class="columns">
            <div class="pro column is-half" style="">
              <p>Goal:</p>
              <p>To sculpt a better body</p>
            </div>
            <div class="pro column is-half" style="">
              <p>Goal:</p>
              <p>To sculpt a better body</p>
              past exercises:
              <ul>
                <li>Jumping Jacks</li>
                <li>Push Ups</li>
                <li>Squats</li>
              </ul>
            </div>
          </div>
        </div>
        <!-- div above is end of column container -->
      </div>
      <!-- div above end of columns -->
    </div>
  </div>
</template>

<script>
import { profile } from "@/models/profile.js";
export default {
  data() {
    return {
      profile,
      // items: ["hello", "beast", "king"],
    };
  },
};
</script>

<style scoped>
.profile-img {
  width: 300px;
}
.follow-group {
  display: flex;
}
.follow-group p,
.follow-group button {
  margin: 0 5px;
}
.name {
  font-size: 25px;
}
.profile-contain {
  margin: 10px 90px;
}
.t {
  /* position: relative; */
  width: 100%;
}
.tree-container {
  display: inline-block;
}
.pro {
  border: 1px solid black;
  display: inline-block;
  background: lightblue;
}
</style>

