<template>
  <title-area title="#cart" text="Add your coupon code & SAVE upto 70%" />
  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TitleArea from "../TitleArea.vue";

export default {
  name: "Cart",
  components: {
    TitleArea,
  },
};
</script>

<style scoped>
</style>