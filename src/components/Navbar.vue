<template>
  <nav class="navbar d-flex position-fixed">
    <div class="container">
      <img src="../assets/logo.png" alt="missing" width="30" />
      <ul class="d-flex p-0 m-0 align-items-center">
        <li v-for="value in router" :key="value.name">
          <router-link :to="value.path">
            {{ value.name }}
          </router-link>
        </li>
        <li>
          <router-link to="/Cart">
            <font-icon icon="shopping-cart" style="font-size: 1.3rem" />
          </router-link>
        </li>
        <li>
          <router-link to="/Login">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Navbar",
  setup() {
    const router = reactive([
      {
        path: "/",
        name: "Home",
      },
      {
        path: "/Shop",
        name: "Shop",
      },
      {
        path: "/Blog",
        name: "Blog",
      },
      {
        path: "/About",
        name: "About",
      },
      {
        path: "/Connect",
        name: "Contact",
      },
    ]);
    return {
      router,
    };
  },
};
</script>

<style scoped>
nav {
  background: rgb(247, 244, 244);
  z-index: 99;
  width: 100%;
  outline: 0.5px #dedede solid;
}
ul {
  list-style: none;
}

li a {
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  padding: 10px 15px;
  color: black;
  font-weight: 900;
}
li a:hover {
  color: rgb(28, 196, 131);
  border-bottom: 1px solid rgb(28, 196, 131);
  transition: all;
  transform: scale(1.5);
  transition-duration: 0.5s;
}
</style>