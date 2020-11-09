<template>
  <div class="page">
    <!-- <h2 class="title is-2">Feed</h2> -->
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="title is-3">Main Feed</div>

        <Posts :key="i" v-for="(x, i) in posts" :post="x" />
      </div>
      <div class="column is-one-third">
        <Sidebar />
      </div>
    </div>
    <!-- <div :key="i" v-for="(item, i) in items">Hello</div> -->
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import Posts from "@/components/Posts.vue";
import { posts } from "@/models/feed.js";
export default {
  name: "Home",
  data() {
    return {
      posts,
      // items: ["hello", "beast", "king"],
    };
  },
  components: {
    Sidebar,
    Posts,

    // User,
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 70px;
}
.page {
  margin: 0 50px;
}
</style>