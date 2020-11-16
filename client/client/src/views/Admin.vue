<template>
  <div class="page">
    <div class="columns">
      <div id="menu" class="column is-one-fifth">
        <aside class="menu">
          <p class="menu-label">General</p>
          <ul class="menu-list">
            <li><a>Dashboard</a></li>
            <li><a>Users</a></li>
          </ul>
          <p class="menu-label">Administration</p>
          <ul class="menu-list">
            <li><a>Team Settings</a></li>
            <li>
              <a class="is-active">Manage Your Team</a>
              <ul>
                <li><a>Members</a></li>
                <li><a>Plugins</a></li>
                <li><a>Add a member</a></li>
              </ul>
            </li>
            <li><a>Invitations</a></li>
            <li><a>Cloud Storage Environment Settings</a></li>
            <li><a>Authentication</a></li>
          </ul>
          <p class="menu-label">Transactions</p>
          <ul class="menu-list">
            <li><a>Payments</a></li>
            <li><a>Transfers</a></li>
            <li><a>Balance</a></li>
          </ul>
        </aside>
      </div>
      <!-- User table  -->
      <div class="users column is-two-thirds">
        <table>
          <h1>User Table</h1>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Date Joined</th>
            <td>remove</td>
          </tr>
          <tr>
            <td>Alfred Pennyworth</td>
            <td>pennyforyouthoughts</td>
            <td>2019</td>
            <td>remove</td>
          </tr>
          <tr>
            <td>Bruce Wayne</td>
            <td>iamvengeance</td>
            <td>2018</td>
            <td>remove</td>
          </tr>

          <User
            :remove="remove"
            @clicked="remove(i)"
            :users="x"
            v-for="(x, i) in users"
            :key="i"
            ref="bar"
            :deletekey="i"
          />
        </table>
        <h1>Add users</h1>
        <form id="form" action="/admin" onsubmit="submit">
          <input type="text" name="fname" id="fname" />
          <input type="text" name="lname" id="lname" />
          <input type="text" name="handle" id="handle" />
          <button id="user-btn" v-on:click="addUser">Add users</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { posts } from "@/models/feed";
import User from "@/components/User.vue";
import { users } from "@/models/users.js";
var hello;
var id = 3;

export default {
  data() {
    return {
      posts,
      users,
      usersinthis: [],
      hello,
    };
  },
  components: {
    User,
  },
  methods: {
    addUser() {
      var f = document.getElementById("fname").value;
      var q = document.getElementById("lname").value;
      var h = document.getElementById("handle").value;
      id++;
      users.push({
        firstname: f,
        lastname: q,
        handle: h,
        datejoined: new Date().getFullYear(),
        id: id,
      });
      // return docum;
    },
    submit() {
      // document.getElement;
      hello = "king";
      console.log("hello");
    },
    remove(index) {
      // this.users = this.users.filter((value) => value.id != index);
      this.users.splice(index, 1);
      // console.log(index);
      // console.log("hello");
    },
    beast() {
      console.log("I am the beast");
    },
  },
  mounted() {
    var form = document.getElementById("form");
    function handleForm(event) {
      event.preventDefault();
    }
    form.addEventListener("submit", handleForm);
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
.menu {
  margin-left: 15px;
}
#user-btn {
  position: absolute;
  right: 10px;
  margin-top: 10px;
}
.users {
  position: relative;
}
form {
  width: 100%;
}
form input {
  width: 20%;
  margin: 0 20px;
  padding: 8px;
  outline: none;
}
</style>