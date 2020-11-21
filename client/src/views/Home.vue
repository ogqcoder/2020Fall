<template>
  <div class="home">
    <!-- <Nav /> -->
    <div class="group">
      <div class="content">
        <h1>Do Better For Yourself</h1>
        <p>
          Where you can workout and keep track of your goals as well as making
          sure your friends are fulfilling their goals as well!
        </p>
        <a class="btn" href="#/register">Let's Go!</a>
      </div>
      <div class="image">
        <img src="../assets/workout.jpg" alt="" />
      </div>
    </div>

    <!-- <div style="color: red; font-size: 100px">hello</div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Register from "@/components/Register.vue";
// import User from "@/components/User.vue";
// import Registe from "@/components/Registe.vue";

export default {
  name: "Home",
  components: {
    // Registe,
    // User,
  },
};
</script>
<style scoped>
img {
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  filter: sepia(100%);
  filter: blur(2px);
}

@keyframes move {
  0% {
    transform: translate(-50px, 0);
    opacity: 0;
  }

  50% {
    transform: translate(50px, 0);
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
.image {
  width: 100vw;
  height: 100vh;
  /* position: absolute; */
  top: 0;
  z-index: -20;
}
.content {
  position: absolute;
  color: white;
  text-align: center;
  /* transform: translate(0, 100%); */
  bottom: 10%;
  right: 35%;
  font-size: 30px;
  color: rgb(44, 236, 236);
  max-width: 500px;
  width: 80%;
  /* background: #555; */
  border-radius: 10px;
  box-shadow: 0 0 10px rgb(44, 236, 236);
  text-shadow: 0 0 5px;
  animation: move 2s ease-in-out;
  padding-bottom: 30px;
}
.content h1 {
  color: rgb(44, 236, 236);
  text-shadow: 0 0 5px;
}

.btn {
  color: rgb(44, 236, 236);
  background: transparent;
  border: 1px solid rgb(44, 236, 236);
  padding: 10px 20px;
  margin-bottom: 40px;
  text-decoration: none;
}
.btn:hover {
  background-color: rgb(44, 236, 236);
  color: rgba(0, 0, 0, 0.4);
}

@media (max-width: 800px) {
  .content {
    transform: translate(45%);
  }
}
</style>
