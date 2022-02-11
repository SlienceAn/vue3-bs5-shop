<template>
  <div class="w-100">
    <title-area title="#stayhome" />
    <div class="container mt-5">
      <div class="shopList row mt-0 mb-0 m-auto m-auto container">
        <div class="d-flex justify-content-center gap-2 mb-3">
          <label class="d-inline-flex cate" v-for="i in 8" :key="i">
            <input type="checkbox" style="zoom: 2" />
            <span>
              <strong>text-{{ i }}</strong>
            </span>
          </label>
        </div>
        <div
          v-for="value in shopInfo"
          :key="value.id"
          class="col-sm-12 col-md-2 mb-4"
        >
          <Card :shopInfo="value" />
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination d-flex gap-1">
            <li class="page-item">
              <span class="page-link py-2 px-3 bg-success text-white">
                <font-icon
                  :icon="['fa', 'caret-left']"
                  style="font-size: 1.2rem"
                />
              </span>
            </li>
            <li class="page-item" v-for="i in 8" :key="i">
              <span class="page-link py-2 px-3 bg-success text-white"
                >{{ i }}
              </span>
            </li>
            <li class="page-item">
              <span class="page-link py-2 px-3 bg-success text-white">
                <font-icon
                  :icon="['fa', 'caret-right']"
                  style="font-size: 1.2rem"
                />
              </span>
            </li>
          </ul>
        </nav>
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
.cate:hover,
.page-link {
  cursor: pointer;
}
</style>