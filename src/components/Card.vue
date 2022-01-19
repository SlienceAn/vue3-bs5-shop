<template>
  <div class="card text-start">
    <img class="card-img-top p-2" :src="props.shopInfo.img" alt="Card-img" />
    <div class="card-body">
      <span class="text-black-50">{{ props.shopInfo.cate }}</span>
      <h5 class="card-title">
        <strong>{{ props.shopInfo.name }}</strong>
      </h5>
      <div class="star">
        <font-icon
          :icon="['fa', 'star']"
          v-for="star in 5"
          :key="star"
          class="text-warning"
        />
      </div>
      <div class="d-flex justify-content-between">
        <p class="card-text m-0 text-success">
          <strong>${{ props.shopInfo.price }}</strong>
        </p>
        <font-icon :icon="['fa', 'shopping-cart']" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    shopInfo: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style scoped>
.card:hover {
  cursor: pointer;
}
</style>