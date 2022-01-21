<template>
  <div class="w-100">
    <title-area title="#KnowUs" text="Lorem lpsum color it ,condiroinno" />
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline">
            <div class="timeline" v-for="i in 4" :key="i">
              <div class="timeline-content">
                <div class="circle">
                  <span><font-icon :icon="['fa', 'shopping-cart']" /></span>
                </div>
                <div class="content">
                  <span class="year">2013-2014</span>
                  <h4 class="title">Web Design</h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non lectus justo. Nam ultricies laoreet massa sed
                    maximus. Curabitur tristique sagittis scelerisque. Vivamus
                    posuere nisi quis tortor interdum, in finibus risus
                    convallis. Suspendisse efficitur lacus a nulla commodo, sit
                    amet vestibulum nibh.
                  </p>
                  <div class="icon"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TitleArea from "../TitleArea.vue";
export default {
  name: "About",
  components: {
    TitleArea,
  },
};
</script>

<style scoped>
.main-timeline {
  position: relative;
}
/*中間線條*/
.main-timeline:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #302124;
  position: absolute;
  top: 0;
  left: 50%;
}
.timeline {
  width: 50%;
}
.year {
  display: block;
  padding: 10px;
  margin: 10px 0 50px 0;
  background: #cca872;
  border-radius: 7px;
  font-size: 25px;
  color: #fff;
}
.title {
  font-size: 25px;
  font-weight: bold;
  color: #cca872;
  margin-top: 0;
}
.description {
  font-size: 14px;
  color: #a6a6a6;
  text-align: justify;
}
.icon {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #cca872;
  position: absolute;
  top: 78px;
  right: -14px;
}
</style>