<template>
  <div class="hello">
    <ul class="navi">
      <li><a href="">Home</a></li>
      <li><a href="">plan</a></li>
      <li><a href="">messages</a></li>
      <span>1</span>
      <li><a href="">Contact</a></li>
      <li><a href="">About us</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    be: String,
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navi {
  display: flex;
  margin: 0;
  height: 50px;
  background-color: rgb(85, 73, 73);
  color: white;
  align-items: center;
}
.navi li {
  margin: 0 10px;
  padding: 10px;
  align-self: center;
}
.navi li a {
  color: white;
  text-decoration: none;
}
.navi li:hover {
  background: rgb(110, 52, 52);
}

span {
  color: white;
  background-color: red;
  font-size: 0.5em;
  z-index: 3;
  transform: translate(-21px, -9px);
}
</style>
