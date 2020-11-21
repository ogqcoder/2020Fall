<template>
  <div class="page">
    <!-- <h2 class="title is-2">Feed</h2> -->
    <div class="columns">
      <div class="column is-two-thirds">
        <div class="title is-3">Main Feed</div>
        <h2 id="add">Add Posts</h2>
        <i id="addBtn" class="fas fa-plus-circle fa-5x"></i>
        <form id="form" class="disappear" action="/posts" onsubmit="submit">
          <input type="text" name="image" id="image" />
          <br />
          <textarea name="text" id="text" cols="30" rows="10"></textarea>
          <br />
          <!-- <input type="text" name="handle" id="handle" /> -->
          <button id="user-btn" v-on:click="addPosts">Add Posts</button>
        </form>

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

  methods: {
    addPosts() {
      var i = document.getElementById("image").value;
      var q = document.getElementById("text").value;
      // var h = document.getElementById("handle").value;

      posts.unshift({
        imageUrl: i,
        message: q,
        owner: {
          name: "G Smith",
          handle: "unlimited_g",
        },
      });
    },
  },
  mounted() {
    var form = document.getElementById("form");
    function handleForm(event) {
      event.preventDefault();
    }
    form.addEventListener("submit", handleForm);

    var add = document.getElementById("addBtn");
    add.addEventListener("click", function () {
      if (form.classList.contains("appear")) {
        form.classList.add("disappear");
        form.classList.remove("appear");
        add.classList.add("fa-plus-circle");
        add.classList.remove("fa-minus-circle");
      } else {
        form.classList.add("appear");
        form.classList.remove("disappear");
        add.classList.add("fa-minus-circle");
        add.classList.remove("fa-plus-circle");
      }
    });
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

#add,
i {
  display: inline;
}
.appear {
  display: block;
}
.disappear {
  display: none;
}
i:hover {
  transition: color 0.7s;
  color: red;
}
</style>