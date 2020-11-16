<template>
  <div class="t">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Primary title</h1>
          <h2 class="subtitle">Primary subtitle</h2>
        </div>
      </div>
    </section>
    <div>
      <div class="profile-contain">
        <img class="profile-img" src="../assets/strength.jpg" alt="" />

        <div class="name">Shikamaru Nara</div>
        <div class="bio">
          <p :key="i" v-for="(x, i) in profile">
            Main Exercise:
            {{ x.exercises }}
          </p>
          calories burnt Today: 300
        </div>
        <div class="follow-group">
          <button>Follow</button>
          <p>followers: 30</p>
          <p>following: 30</p>
        </div>
      </div>
    </div>

    <div>
      <div class="tree-container king">
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
      </div>
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
  /* transform: translate(50%); */
  position: relative;
  left: 50%;
  width: 200px;
  margin: 0;
  padding: 0;
  /* display: block; */
}
.king {
  position: absolute;
  color: red;
  /* left: 0; */
  /* bottom: 0; */
  right: 50%;
  /* top: 5%; */
}
.t {
  /* position: relative; */
  width: 100%;
}
</style>