<template>
  <div class="d-flex flex-column">
    <div class="box">
      <Navbar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
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
