<template>
  <div class="container py-5">
    <div class="row w-75 m-auto mb-5">
      <div
        class="production-img col-md-4 col-xs-12"
        :style="{
          backgroundImage: `url(${params.img})`,
        }"
      />
      <div class="production-content col-md-8 col-xs-12">
        <div class="card h-100">
          <div class="card-header">
            <h3>
              <strong>{{ params.name }}</strong>
            </h3>
          </div>
          <div class="card-body">
            <span>
              $
              <strong v-price> {{ params.price }}</strong>
            </span>
            <div class="d-flex">
              <button class="btn btn-success">-</button>
              <input type="text" class="form-control" value="1" />
              <button class="btn btn-success" @click="insertCart(params)">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
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
          <ul>
            <li>Production Info</li>
            <li>Production Info</li>
            <li>Production Info</li>
          </ul>
        </div>
        <div
          class="tab-pane"
          id="messages"
          role="tabpanel"
          aria-labelledby="messages-tab"
        >
          <ul>
            <li>Messages</li>
            <li>Messages</li>
            <li>Messages</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { reactive, inject } from "vue";

export default {
  name: "Production",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const params = reactive(route.query);
    const insertCart = inject("insertCart");
    const cartData = inject("cartData");

    router.beforeEach(() => {
      console.log(cartData); //Can use
    });
    return {
      params,
      insertCart,
      cartData,
    };
  },
};
</script>

<style scoped>
.production-img {
  height: 40vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  outline: 0.5px solid rgba(133, 132, 132, 0.5);
}
.production-content {
  padding-left: 25px;
  padding-right: 0;
}
.production-content span {
  color: red;
  font-size: 25px;
}
</style>