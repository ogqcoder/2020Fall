<template>
  <nav class="panel">
    <p class="panel-heading">Followers</p>
    <div class="panel-block">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Search" />
        <span class="icon is-left">
          <i class="fas fa-search" aria-hidden="true"></i>
        </span>
      </p>
    </div>
    <!-- <p class="panel-tabs">
      <a class="is-active">All</a>
      <a>Public</a>
      <a>Private</a>
      <a>Sources</a>
      <a>Forks</a>
    </p> -->
    <a
      v-for="(user, i) in users[0].followers"
      :key="i"
      class="panel-block is-active"
    >
      <span class="panel-icon">
        <i class="fas fa-book" aria-hidden="true"></i>
      </span>
      {{ user }}
    </a>
  </nav>
</template>

<script>
import { users } from "@/models/users.js";
export default {
  data() {
    return {
      users,
    };
  },
};
</script>

<style>
</style>