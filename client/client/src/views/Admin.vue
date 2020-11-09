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
      <div class="users column is-two-thirds">
        <table>
          <h1>User Table</h1>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Date Joined</th>
          </tr>
          <tr>
            <td>Alfred Pennyworth</td>
            <td>pennyforyouthoughts</td>
            <td>2019</td>
          </tr>
          <tr>
            <td>Bruce Wayne</td>
            <td>iamvengeance</td>
            <td>2018</td>
          </tr>
          <tr>
            <td>Richard Grayson</td>
            <td>thebestrobin</td>
            <td>2014</td>
          </tr>
          <tr>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td>Now</td>
          </tr>
        </table>
        <button id="user-btn">Add users</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>