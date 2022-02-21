<template>
  <div class="form-box">
    <form class="col-md-4 col-xs-12">
      <h1 class="text-center">Sign in</h1>
      <div class="block-cube block-input mb-5 mt-5">
        <input type="text" class="form-input" v-model="UserData.account" />
        <div class="bg-top">
          <div class="bg-inner" />
        </div>
        <div class="bg-right">
          <div class="bg-inner" />
        </div>
      </div>
      <div class="block-cube block-input mb-5">
        <input type="text" class="form-input" v-model="UserData.password" />
        <div class="bg-top">
          <div class="bg-inner" />
        </div>
        <div class="bg-right">
          <div class="bg-inner" />
        </div>
      </div>
      <div class="block-cube block-input mb-5 block-button">
        <button @click.prevent="">Sign in</button>
        <div class="bg-top">
          <div class="bg-inner" />
        </div>
        <div class="bg-right">
          <div class="bg-inner" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Login",
  setup() {
    const UserData = reactive({
      account: "Input User Name",
      password: "Input User Password",
    });

    return {
      UserData,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.block-cube {
  position: relative;
}
.bg-top {
  position: absolute;
  height: 10px;
  outline: 0.1px solid;
  bottom: 100%;
  left: 5px;
  right: -5px;
  transform: skew(-45deg, 0);
  margin: 0;
}
.bg-top .bg-inner {
  bottom: 0;
}
.bg-right {
  position: absolute;
  outline: 0.1px solid;
  top: -5px;
  z-index: 0;
  bottom: 5px;
  width: 10px;
  left: 100%;
  transform: skew(0, -45deg);
}
.bg-right .bg-inner {
  left: 0;
}
.form-box {
  background: #212121;
  color: #fff;
  height: 100%;
  padding: 50px;
}
.form-box form {
  margin: 0 auto;
}
.form-input {
  width: 100%;
  padding: 14px 16px;
  background: transparent;
  color: #fff;
  font-family: monospace, serif;
  letter-spacing: 0.05em;
  font-size: 16px;
  border-bottom: 0.1px solid;
  border-left: 0.1px solid;
}
.form-input:hover,
.form-input:focus {
  border-bottom: 0.1px solid;
  border-left: 0.1px solid;
  outline: none;
}
.form-input:hover ~ .bg-top,
.form-input:focus ~ .bg-top {
  background: rgb(170, 168, 168);
}
.form-input:focus ~ .bg-right,
.form-input:hover ~ .bg-right {
  background: rgb(105, 105, 105);
}
.block-button button {
  width: 100%;
  border: 0;
  padding: 18px 20px;
  font-weight: bolder;
  outline: none;
  margin-left: -1px;
  background: transparent;
  color: rgb(85, 90, 215);
  border-bottom: 0.1px solid rgb(85, 90, 215);
  border-left: 0.1px solid rgb(85, 90, 215);
}
.block-button .bg-top,
.block-button .bg-right {
  outline: 0.1px solid rgb(85, 90, 215);
}

.block-button button:hover ~ .bg-top {
  background: rgb(8, 84, 199);
}
.block-button button:hover~ .bg-right{
  background: rgb(4, 40, 158);
}
</style>