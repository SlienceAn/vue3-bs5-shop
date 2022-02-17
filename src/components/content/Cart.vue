<template>
  <title-area title="#cart" text="Add your coupon code & SAVE upto 70%" />
  <div
    class="container mt-5 mb-5 text-center"
    v-if="Object.keys(cartData).length === 0"
  >
    <strong> 尚無商品加入購物車</strong>
  </div>
  <div class="container mt-5 mb-5" v-else>
    <div
      class="cart d-flex justify-content-between align-items-center"
      v-for="i in cartData"
      :key="i.id"
    >
      <button class="btn p-0">
        <font-icon :icon="['fa', 'window-close']" class="cart-icon" />
      </button>
      <div class="cart-img" :style="{ backgroundImage: `url(${i.img})` }" />
      <div class="cart-name">{{ i.name }}</div>
      <div class="cart-count d-flex">
        <button class="btn btn-success">+</button>
        <input type="text" value="1" />
        <button class="btn btn-success">-</button>
      </div>
      <div class="cart-money" v-price>{{ i.price }}</div>
    </div>
    <div class="cart-footer">
      <span>total : $ </span>
      <strong>{{ totalMoney }}</strong>
    </div>
  </div>
</template>

<script>
import TitleArea from "../TitleArea.vue";
import { inject, onMounted, ref } from "vue";
export default {
  name: "Cart",
  components: {
    TitleArea,
  },
  setup() {
    const cartData = inject("cartData");
    let totalMoney = ref(0);
    onMounted(() => {
      console.log(cartData);
      if (Object.keys(cartData).length !== 0) {
        for (let i in cartData) {
          totalMoney.value += parseInt(cartData[i].price);
        }
      }
    });
    return {
      cartData,
      totalMoney,
    };
  },
};
</script>

<style scoped>
.cart {
  width: 100%;
  outline: 0.5px solid rgba(179, 179, 179, 0.5);
  padding: 10px 45px;
  margin-bottom: 10px;
  border-radius: 10px;
}
.cart-icon {
  font-size: 2rem;
}
.cart-count input {
  width: 50px;
  text-align: center;
}
.cart-count button {
  border-radius: 0;
  padding: 0 8px;
  color: 25px;
}
.cart-img {
  height: 20vh;
  width: 200px;
  outline: 0.5px solid #aaa;
  border-radius: 10px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.cart-money {
  color: red;
  font-size: 25px;
  font-weight: bolder;
}
.cart-footer {
  color: rgb(230, 5, 5);
  font-size: 20px;
  text-align: right;
  padding: 15px 0px;
}
</style>