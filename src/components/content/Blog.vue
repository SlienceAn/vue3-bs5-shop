<template>
  <div class="w-100">
    <title-area
      title="#readmore"
      text="Read all case study about our production"
    />
    <div class="blog-content container">
      <div class="d-flex blog-card" v-for="i in 5" :key="i">
        <div class="col-md-6">
          <div
            class="w-50 col-img h-100 m-auto"
            :style="{
              backgroundImage: `url('https://picsum.photos/200/200?random=${i}')`,
            }"
          >
            <strong class="text-dark-50">13/0{{ i }}</strong>
          </div>
        </div>
        <div class="col-text col-md-6">
          <h4>
            <strong>What is Lorem Ipsum?</strong>
          </h4>
          <p>
            It is a long established fact that a reader will be distracted by
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </p>
          <span>CONTINUE READING....</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleArea from "../TitleArea.vue";
export default {
  name: "Blog",
  components: {
    TitleArea,
  },
};
</script>

<style scoped>
.blog-content {
  margin-top: 150px;
}
.blog-card {
  margin-bottom: 80px;
}
.col-img {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}
.col-img strong {
  font-size: 5rem;
  position: absolute;
  color: gray;
  top: -80px;
  z-index: -1;
}
</style>