<template>
  <div class="d-flex container flex-nowrap">
    <div class="col" v-for="i in 6" :key="i"></div>
  </div>
  <div class="title w-100 text-center py-5">
    <h1><strong>Featured Production </strong></h1>
    <p style="font-size: 10px" class="text-dark-50">
      Summer Collection New Modren Design
    </p>
  </div>
  <div class="shopList row mt-0 mb-0 m-auto m-auto container">
    <div
      v-for="value in shopInfo"
      :key="value.id"
      class="col-sm-12 col-md-3 mb-4"
    >
      <Card :shopInfo="value" />
    </div>
  </div>
  <div class="banner w-100 text-center py-5 text-white">
    <p>
      <strong>Repair Services</strong>
    </p>
    <h2 class="mb-4">
      <strong>Up to 70%off-All Shirts & Accessories</strong>
    </h2>
    <button class="btn btn-success">Explore More</button>
  </div>
  <div class="title w-100 text-center py-5">
    <h1><strong>New Arrival</strong></h1>
    <p style="font-size: 10px" class="text-dark-50">
      Summer Collection New Modren Design
    </p>
  </div>
  <div class="shopList row mt-0 mb-0 m-auto m-auto container">
    <div
      v-for="value in shopInfo"
      :key="value.id"
      class="col-sm-12 col-md-3 mb-4"
    >
      <Card :shopInfo="value" />
    </div>
  </div>
  <div class="banner-card container">
    <div class="d-flex">
      <div class="col">1</div>
      <div class="col">2</div>
    </div>
    <div class="d-flex"></div>
  </div>
</template>

<script>
import Card from "../Card.vue";
import { reactive, onMounted } from "vue";
export default {
  name: "Home",
  components: {
    Card,
  },
  setup() {
    const shopInfo = reactive([]);
    onMounted(() => {
      for (let i = 0; i < 9; i++) {
        shopInfo.push({
          id: i,
          img: "https://picsum.photos/200/150?random" + (i + 1),
          price: 120,
          cate: "T-shirts",
          name: "Custom Alisn T-Shirts",
        });
      }
    });
    return {
      shopInfo,
    };
  },
};
</script>

<style scoped>
.banner {
  background: url("https://picsum.photos/400/500?random=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>