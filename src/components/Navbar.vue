<template>
  <nav class="navbar d-flex justify-content-between">
    <div class="container">
      <img src="../assets/logo.png" alt="missing" width="50" />
      <ul class="d-flex p-0 align-items-center">
        <li v-for="value in router" :key="value.name">
          <router-link :to="value.path">
            {{ value.name }}
          </router-link>
        </li>
        <router-link to="/Cart">
          <font-icon icon="shopping-cart" style="font-size: 1rem" />
        </router-link>
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
  background: rgb(211, 209, 209);
}
ul {
  list-style: none;
}

li a {
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  padding: 1rem;
  color: black;
  font-weight: 900;
}
li a:hover {
  color: rgb(28, 196, 131);
  border-bottom: 1px solid rgb(28, 196, 131);
}
</style>