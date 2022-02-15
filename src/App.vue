<template>
  <div class="d-flex flex-column">
    <div class="box">
      <Navbar />
      <div id="main-view">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { provide, reactive, ref } from "vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const cartData = reactive([]);
    let loginStatus = ref(false);
    let insertCart = (value) => {
      cartData.push(value);
    };
    provide("cartData", cartData);
    provide("insertCart", insertCart);
    provide("loginStatus", loginStatus.value);
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
#main-view {
  margin-top: 60px;
}
</style>
