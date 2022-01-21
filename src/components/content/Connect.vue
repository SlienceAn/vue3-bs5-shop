<template>
  <div class="w-100">
    <title-area title="#Let's talk" />
    <div class="container row m-auto contact-box mb-4">
      <div class="contact-text col-md-6 p-4">
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
      <div class="contact-map col-md-6 p-4">
        <Map />
      </div>
    </div>
    <div class="container row m-auto contact-box">
      <div class="contact-form col-md-6 col-lg-8 p-4">
        <p class="text-dark-50" style="font-size: 10px; color: gray">
          <strong>LEAVE A MESSAGE</strong>
        </p>
        <h3>
          <strong>We love to heard from you</strong>
        </h3>
        <form class="d-flex flex-column gap-4">
          <input type="text" class="form-control" placeholder="Your name" />
          <input type="email" class="form-control" placeholder="E-mail" />
          <input type="text" class="form-control" placeholder="Subject" />
          <textarea
            class="form-control"
            style="height: 100px"
            placeholder="Your Message"
          />
          <button class="btn btn-success">Submit</button>
        </form>
      </div>
      <div class="contact-member col-md-6 col-lg-4 p-4">
        <div class="row m-0 py-2" v-for="i in 3" :key="i">
          <div class="member-logo col-lg-4">
            <div />
          </div>
          <div class="member-text col-lg-8">
            <h5>
              <strong>John Doe</strong>
            </h5>
            <span>Senior Marketing Manger</span>
            <span>Phone : 000 123 000 77558</span>
            <span>Email : aaaaa@gmail.com</span>
          </div>
        </div>
      </div>
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
.contact-box {
  padding: 2rem 0;
}
.contact-box:nth-child(3) {
  outline: 0.5px solid rgba(211, 211, 211, 0.651);
}
.member-logo {
  padding: 5px;
}
.member-logo div {
  width: 90%;
  height: 100%;
  outline: .5px solid rgb(102, 102, 102);
  border-radius: 100%;
  margin: auto;
  background: url("https://picsum.photos/400/500?random=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.member-text span {
  display: block;
  margin-bottom: 0.35rem;
  color: gray;
}
</style>