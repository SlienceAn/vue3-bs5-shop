<template>
  <div class="grid-wrap">
    <div class="grid-wrap-box" v-for="i in 8" :key="i">
      <!-- <h4>production cate</h4> -->
      <button
        class="btn btn-success d-flex align-items-center gap-2"
        @click="goShop"
      >
        <span>GO</span>
        <font-icon :icon="['fa', 'caret-right']" style="font-size: 1.3rem" />
      </button>
    </div>
  </div>
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
      class="col-sm-12 col-md-2 mb-4"
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
  <marquee-text class="marquee-content" :repeat="10" :duration="30">
    <span
      v-for="i in 10"
      :key="i"
      :style="{
        backgroundImage: `url('https://picsum.photos/200/200?random=${i}')`,
      }"
    />
  </marquee-text>
</template>

<script>
import Card from "../Card.vue";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import MarqueeText from "vue-marquee-text-component";
export default {
  name: "Home",
  components: {
    Card,
    MarqueeText,
  },
  setup() {
    const shopInfo = reactive([]);
    const router = useRouter();
    onMounted(() => {
      for (let i = 0; i < 9; i++) {
        shopInfo.push({
          id: i,
          img: "https://picsum.photos/200/150?random" + (i + 1),
          price: 12000,
          cate: "T-shirts",
          name: "Custom Alisn T-Shirts",
        });
      }
    });
    let goShop = () => {
      router.push({
        path: "/shop",
      });
    };
    return {
      shopInfo,
      goShop,
    };
  },
};
</script>

<style scoped>
.grid-wrap {
  display: grid;
  gap: 3px;
  height: 70vh;
}
.grid-wrap-box {
  font-size: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 25px;
}
.grid-wrap-box h4 {
  background: rgba(3, 3, 3, 0.514);
  padding: 10px 30px;
  outline: solid #fff;
  border-radius: 10px;
}
.grid-wrap-box:nth-child(1) {
  background-image: url("https://picsum.photos/500/450?random=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-column-start: 1;
  grid-column-end: 2;
}
.grid-wrap-box:nth-child(2) {
  background-image: url("https://picsum.photos/500/450?random=2");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-column-start: 2;
  grid-column-end: 3;
}
.grid-wrap-box:nth-child(3) {
  background-image: url("https://picsum.photos/500/450?random=3");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 5;
}
.grid-wrap-box:nth-child(4) {
  background-image: url("https://picsum.photos/500/450?random=4");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 5;
}
.grid-wrap-box:nth-child(5) {
  background-image: url("https://picsum.photos/500/450?random=5");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.grid-wrap-box:nth-child(6) {
  background-image: url("https://picsum.photos/500/450?random=6");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.grid-wrap-box:nth-child(7) {
  background-image: url("https://picsum.photos/500/450?random=7");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.grid-wrap-box:nth-child(8) {
  background-image: url("https://picsum.photos/500/450?random=8");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.banner {
  background: url("https://picsum.photos/400/500?random=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.shopList a {
  text-decoration: none;
  color: #333;
}
.marquee-text-wrap {
  position: relative;
}
.marquee-text-wrap::before,
.marquee-text-wrap::after {
  content: "";
  position: absolute;
  width: 10%;
  height: 100%;
  top: 0;
  z-index: 1;
}
.marquee-text-wrap::before {
  left: 0;
  background: linear-gradient(to right, #fff, transparent);
}
.marquee-text-wrap::after {
  right: 0;
  background: linear-gradient(to left, #fff, transparent);
}

.marquee-content span {
  display: inline-block;
  width: 200px;
  height: 200px;
}
</style>