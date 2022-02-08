<template>
  <div class="d-flex flex-column">
    <div class="box">
      <Navbar />
      <transition>
        <router-view />
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { provide, reactive } from "vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const cartData = reactive([]);
    provide("cartData", cartData);
  },
};
</script>

<style scoped>
.box {
  min-height: 50vh;
}
.box {
  flex: 1;
}
</style>
