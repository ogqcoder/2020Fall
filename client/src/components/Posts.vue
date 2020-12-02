<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <!-- <img src="https://bulma.io/images/placeholders/1280x960.png" /> -->
        <img :src="post.URL" class="fit" alt="Placeholder image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="" alt="Placeholder image" />
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">
            {{ user.FirstName + " " + user.LastName }}
          </p>
          <p class="subtitle is-6">{{ post.Media_Type }}</p>
        </div>
      </div>

      <div class="content">
        {{ post.Text }}
        <br />
        <time :datetime="post.created_at">{{
          post.created_at.split("T")[0]
        }}</time>
      </div>
      <div class="level-left">
        <a class="level-item" aria-label="reply">
          <span class="icon is-small">
            <i class="fas fa-reply" aria-hidden="true"></i>
          </span>
        </a>
        <a class="level-item" aria-label="retweet">
          <span class="icon is-small">
            <i class="fas fa-retweet" aria-hidden="true"></i>
          </span>
        </a>
        <a class="level-item" aria-label="like" id="like" @click="react()">
          <span class="icon is-small">
            <i class="fas fa-heart" aria-hidden="true"></i>
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getAUser } from "@/models/users.js";
import { getPostById } from "@/models/feed.js";

export default {
  data() {
    return {
      getAUser,
      getPostById,
      user: String,
    };
  },
  props: {
    post: Object,
  },
  methods: {
    // clicked() {
    //   this.$emit("clicked");
    // },

    react() {
      if (event.target.classList.contains("red")) {
        event.target.classList.remove("red");
      } else {
        event.target.classList.add("red");
      }
    },
  },
  async created() {
    console.log(this.post.Owner_id, "post");
    this.user = await getAUser(this.post.Owner_id);
    console.log(this.user, "user");
  },
};
</script>

<style scoped>
.red {
  color: red;
}
.fit {
  object-fit: cover;
}
</style>