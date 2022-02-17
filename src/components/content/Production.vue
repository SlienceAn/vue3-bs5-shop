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
            <div class="d-flex w-25">
              <button
                class="btn btn-success"
                @click="itemNum--"
                :disabled="itemNum === 1"
              >
                -
              </button>
              <input
                type="text"
                class="form-control text-center"
                v-model="itemNum"
              />
              <button class="btn btn-success" @click="itemNum++">+</button>
            </div>
            <div>
              <button class="btn btn-success" @click="insertCart(params)">
                加入購物車
              </button>
              <button class="btn btn-success">直接購買</button>
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
import { useRoute } from "vue-router";
import { reactive, inject, ref } from "vue";
export default {
  name: "Production",
  setup() {
    const route = useRoute();
    let itemNum = ref(1);
    const params = reactive({
      ...route.query,
      itemNum: itemNum.value,
    });
    const insertCart = inject("insertCart");
    return {
      params,
      insertCart,
      itemNum,
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
.btn {
  border-radius: 0;
}
</style>