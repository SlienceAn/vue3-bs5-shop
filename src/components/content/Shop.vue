<template>
  <div class="w-100">
    <title-area title="#stayhome" />
    <div class="container mt-5">
      <div class="shopList row mt-0 mb-0 m-auto m-auto container">
        <div
          v-for="value in shopInfo"
          :key="value.id"
          class="col-sm-12 col-md-2 mb-4"
        >
          <Card :shopInfo="value" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../Card.vue";
import TitleArea from "../TitleArea.vue";
import { reactive, onMounted } from "vue";
export default {
  name: "Shop",
  components: {
    Card,
    TitleArea,
  },
  setup() {
    const shopInfo = reactive([]);
    onMounted(() => {
      for (let i = 0; i < 30; i++) {
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
</style>