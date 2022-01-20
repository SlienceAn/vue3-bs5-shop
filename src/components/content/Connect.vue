<template>
  <div class="w-100">
    <title-area title="#Let's talk" />
    <div class="container d-flex py-4">
      <div class="contact-text col">
        <p class="text-dark-50" style="font-size: 10px; color: gray">
          <strong>GET IN TOUCH</strong>
        </p>
        <h3>
          <strong>Visit one of our agency locations or contact us today</strong>
        </h3>
        <h6 class="mb-4">
          <strong>Head Office</strong>
        </h6>
        <div
          class="d-flex gap-4 align-items-center w-50"
          style="color: gray"
          v-for="i in icons"
          :key="i"
        >
          <font-icon :icon="['fa', 'phone']" />
          <span>text</span>
        </div>
      </div>
      <div class="contact-map col">
        <Map />
      </div>
    </div>
    <div class="container d-flex">
      <div class="contact-form"></div>
      <div class="contact-list"></div>
    </div>
  </div>
</template>

<script>
import TitleArea from "../TitleArea.vue";
import Map from "./Map.vue";
import { reactive } from "vue";
export default {
  name: "Connect",
  components: {
    TitleArea,
    Map,
  },
  setup() {
    const icons = reactive(["phone", "info", "calendar"]);
    return {
      icons,
    };
  },
};
</script>

<style scoped>
</style>