<template>
  <div>footer</div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "Footer",
  setup() {
    onMounted(() => {
      console.log("mounted");
    });
  },
};
</script>

<style scoped>
</style>