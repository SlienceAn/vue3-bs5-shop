<template>
  <div class="container py-5">
    <div class="d-flex w-75 m-auto mb-5">
      <img :src="params.img" alt="production-img" />
      <div>{{ params.price }}</div>
    </div>
    <div class="w-75 m-auto">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="Info"
            data-bs-toggle="tab"
            data-bs-target="#home"
            type="button"
            role="tab"
          >
            Production Info
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="messages-tab"
            data-bs-toggle="tab"
            data-bs-target="#messages"
            type="button"
            role="tab"
          >
            Messages
          </button>
        </li>
      </ul>
      <div class="tab-content">
        <div
          class="tab-pane active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          Production Info
        </div>
        <div
          class="tab-pane"
          id="messages"
          role="tabpanel"
          aria-labelledby="messages-tab"
        >
          messages
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { reactive } from "vue";

export default {
  name: "Production",
  setup() {
    const route = useRoute();
    const params = reactive(route.query);
    return {
      params,
    };
  },
};
</script>

<style scoped>
</style>