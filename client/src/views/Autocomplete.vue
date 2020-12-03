<template>
  <div class="autocomplete">
    <div class="input" ref="input" @click="toggleVisible"></div>
    <div class="popup" v-show="visible">
      <input
        class="write"
        type="text"
        name=""
        id=""
        v-model="query"
        placeholder="type"
      />
      <div class="options">
        <ul>
          <li
            v-for="(match, i) in matches"
            :key="(match, i)"
            v-text="match.firstname + ' ' + match.lastname"
            @click="clicked(i)"
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getList } from "@/models/users.js";
export default {
  props: ["items", "filterby"],
  data() {
    return {
      visible: false,
      query: "",
      users: "",
      users2: [],
    };
  },
  methods: {
    toggleVisible() {
      this.visible = !this.visible;
    },
    clicked(i) {
      console.log(this.matches[i]);
      this.$refs.input.innerText =
        this.matches[i].firstname + " " + this.matches[i].lastname;
      console.log(this.$refs);
    },
  },
  async created() {
    this.users = await getList();
    console.log(this.users);
    for (var i = 0; i < this.users.length; i++) {
      this.users2.push({
        firstname: this.users[i].FirstName,
        lastname: this.users[i].LastName,
      });
    }
    console.log(this.users2);
  },
  computed: {
    matches() {
      if (this.query == "") return [];
      //formerly return this.users2 to get all users firstnames and lastnames
      else {
        // return this.users.filter((user) => {
        //   user[this.filterBy]
        //     .includes(this.query)
        //     .toLowerCase()
        //     .includes(this.query.toLowerCase());
        // });
        return this.users2.filter(
          (user) =>
            user.firstname.includes(this.query) ||
            user.firstname.toLowerCase().includes(this.query.toLowerCase())
        );
      }
    },
  },
};
</script>

<style scoped>
.autocomplete {
  width: 100%;
  position: relative;
}
.input {
  border-radius: 10px;
  border: 2px solid black;
  height: 40px;
  box-shadow: 5px 5px 5px grey;
  cursor: text;
  width: 50%;
  margin: 25px 0 0 25%;
}
.popup {
  width: 50%;
  margin: 25px 0 0 25%;
  overflow-y: auto;
  max-height: 150px;
  border: 1px solid black;
}
input {
  border-radius: 10px;
  height: 40px;
  width: 100%;
}
.options li {
  border: 1px solid black;
  padding: 10px;
}
.options li:hover {
  background: cyan;
}
</style>