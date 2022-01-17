<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style scoped>
</style>
