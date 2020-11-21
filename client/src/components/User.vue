<template>
  <tr>
    <td>
      {{ users.handle }}
    </td>
    <td>{{ users.firstname }} {{ users.lastname }}</td>
    <td>{{ users.datejoined }}</td>
    <td>
      <a v-on:click="clicked">{{ users.id }}</a>
    </td>
  </tr>
</template>

<script>
export default {
  name: "User",
  props: {
    users: Object,
    remove: Function,
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
    clicked() {
      this.$emit("clicked");
    },
    // remove() {
    //   // this.users = this.users.filter((value) => value.id != this.users.id);
    //   console.log(this.users);
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  padding: 8px;
  border-left: 1px solid lightgray;
}

tr:nth-child(odd) {
  border-left: 0px solid black;
}
</style>
