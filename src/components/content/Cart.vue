<template>
  <title-area title="#cart" text="Add your coupon code & SAVE upto 70%" />
  <div class="container mt-5 mb-5">
    <div
      class="cart d-flex justify-content-between align-items-center"
      v-for="i in 3"
      :key="i"
    >
      <button class="btn p-0">
        <font-icon :icon="['fa', 'window-close']" class="cart-icon" />
      </button>
      <div class="cart-img">Img</div>
      <div class="cart-name">Name</div>
      <div class="cart-count d-flex">
        <button class="btn btn-secondary">+</button>
        <input type="text" value="1" />
        <button class="btn btn-secondary">-</button>
      </div>
      <div class="cart-money" v-price>120000</div>
    </div>
    <div class="cart-footer"></div>
  </div>
</template>

<script>
import TitleArea from "../TitleArea.vue";
import { inject, onMounted } from "vue";
export default {
  name: "Cart",
  components: {
    TitleArea,
  },
  setup() {
    const cartData = inject("cartData");
    onMounted(() => {
      console.log(cartData);
    });
    let remove = () => {
      
    };
    return {
      cartData,
      remove,
    };
  },
};
</script>

<style scoped>
.cart {
  width: 100%;
  outline: 0.5px solid rgba(122, 121, 121, 0.5);
  padding: 10px 45px;
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
</style>