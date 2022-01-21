<template>
  <footer class="w-100">
    <div class="footer-input w-100">
      <div class="d-flex align-items-center m-auto container py-4">
        <div class="w-50 text-white">
          <h3>
            <strong>Sing Up For Newsletters</strong>
          </h3>
          <span
            >Get a mail updates about our latest shop and special offers</span
          >
        </div>
        <div class="input-group w-50">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
          />
          <button
            class="btn btn-outline-success btn-success text-white"
            type="button"
            id="button-addon2"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
    <div class="footer-body container row m-auto">
      <div class="col-md-6 col-lg-4 py-5 px-0">
        <div class="mb-2">
          <img src="../assets/logo.png" alt="missing" width="30" />
        </div>
        <h5 class="mb-4">
          <strong>Connect</strong>
        </h5>
        <div>
          <strong>Address : </strong>
          <span class="text-gray">562 Willing Road.Street 32</span>
        </div>
        <div>
          <strong>Phone : </strong>
          <span class="text-gray">02-012767586</span>
        </div>
        <div class="mb-3">
          <strong>Hours : </strong>
          <span class="text-gray">A.M 10:00- 20:00 P.M</span>
        </div>
        <strong>Follow us</strong>
        <div class="d-flex gap-2">
          <font-icon
            v-for="i in icons"
            :key="i"
            :icon="['fab', i]"
            style="font-size: 1.5rem"
          />
        </div>
      </div>
      <div class="col-md-6 col-lg-2 py-5 px-0">
        <h5>
          <strong>About</strong>
        </h5>
        <div class="text-gray" v-for="val in aboutList" :key="val">
          {{ val }}
        </div>
      </div>
      <div class="col-md-6 col-lg-2 py-5 px-0">
        <h5>
          <strong>My Account</strong>
        </h5>
        <div class="text-gray" v-for="val in accountList" :key="val">
          {{ val }}
        </div>
      </div>
      <div class="col-md-6 col-lg-4 py-5 px-0">
        <h5>
          <strong>Install App</strong>
        </h5>
        <div class="text-gray">From App Store on Google Play</div>
        <div class="d-flex gap-2 mt-2 mb-2">
          <button class="btn btn-outline-dark d-flex gap-2">
            <font-icon :icon="['fab', 'apple']" style="font-size: 1.5rem" />
            <span>Apple</span>
          </button>
          <button class="btn btn-outline-success d-flex gap-2">
            <font-icon
              :icon="['fab', 'google-play']"
              style="font-size: 1.5rem"
            />
            <span>Google Play</span>
          </button>
        </div>
        <p class="text-gray">Payment</p>
        <div class="d-flex gap-2">
          <font-icon :icon="['fab', 'cc-visa']" style="font-size: 2.5rem" />
          <font-icon :icon="['fab', 'cc-apple-pay']" style="font-size: 2.5rem" />
          <font-icon :icon="['fab', 'cc-mastercard']" style="font-size: 2.5rem" />
        </div>
      </div>
    </div>
    <div class="footer-bottom py-2 w-100">
      <span>@2022,Vue3 + Bootsrap5 Shop demo Web</span>
    </div>
  </footer>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Footer",
  setup() {
    const aboutList = reactive([
      "About us",
      "Delivery information",
      "Privocy Policy",
      "Terms & Conditions",
      "Connect us",
    ]);
    const accountList = reactive([
      "Sign in",
      "View Cart",
      "My Wishlist",
      "Trock My Order",
      "Help",
    ]);
    const icons = reactive([
      "facebook-square",
      "instagram",
      "twitter-square",
      "linkedin",
      "youtube",
    ]);

    return {
      aboutList,
      accountList,
      icons,
    };
  },
};
</script>

<style scoped>
.footer-input {
  background: rgb(1, 10, 87);
}
.footer-bottom {
  text-align: center;
  background: rgb(216, 218, 216);
  color: rgb(114, 114, 114);
}
.text-gray {
  color: rgb(114, 114, 114);
}
</style>