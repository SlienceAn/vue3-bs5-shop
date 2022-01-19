<template>
  <div class="box w-100 text-center text-white">
    <h1>
      <strong>{{ props.title }}</strong>
    </h1>
    <p>{{ props.text }}</p>
  </div>
</template>

<script>
export default {
  name: "TitleArea",
  props: {
    title: {
      type: String,
      required: false,
      default: "no string",
    },
    text: {
      type: String,
      required: false,
      default: "no string",
    },
  },
  setup(props) {
    return { props };
  },
};
</script>

<style scoped>
.box {
  background: url("https://picsum.photos/400/500?random=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 5rem 0rem;
}
</style>