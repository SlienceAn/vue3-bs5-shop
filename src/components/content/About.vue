<template>
  <div class="w-100">
    <title-area title="#KnowUs" text="Lorem lpsum color it ,condiroinno" />
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-6 p-0">
          <div class="main-timeline">
            <div class="timeline" v-for="i in data" :key="i.title">
              <div class="timeline-content">
                <div class="circle">
                  <div><font-icon :icon="['fa', i.icons]" /></div>
                </div>
                <div class="content">
                  <span class="year">{{ i.year }}</span>
                  <h4 class="title">{{ i.title }}</h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non lectus justo. Nam ultricies laoreet massa sed
                    maximus. Curabitur tristique sagittis scelerisque. Vivamus
                    posuere nisi quis tortor interdum, in finibus risus
                    convallis. Suspendisse efficitur lacus a nulla commodo, sit
                    amet vestibulum nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-md-6 p-0">
          <div class="main-timeline-right">
            <div class="timeline-right" v-for="i in 3" :key="i">
              <div class="timeline-content-right">
                <div class="content">
                  <span class="year">{{i}}</span>
                  <h4 class="title">About</h4>
                  <p class="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce non lectus justo. Nam ultricies laoreet massa sed
                    maximus. Curabitur tristique sagittis scelerisque. Vivamus
                    posuere nisi quis tortor interdum, in finibus risus
                    convallis. Suspendisse efficitur lacus a nulla commodo, sit
                    amet vestibulum nibh.
                  </p>
                </div>
                <div class="circle">
                  <div><font-icon :icon="['fa', 'bullhorn']" /></div>
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
import { reactive } from "vue";
export default {
  name: "About",
  components: {
    TitleArea,
  },
  setup() {
    const data = reactive([
      {
        title: "Web Title One",
        icons: "bullhorn",
        year: "2020-2021",
      },
      {
        title: "Web Title Two",
        icons: "globe",
        year: "2019-2020",
      },
      {
        title: "Web Title Three",
        icons: "tags",
        year: "2017-2019",
      },
      {
        title: "Web Title Four",
        icons: "pen-alt",
        year: "2016-2017",
      },
    ]);
    return {
      data,
    };
  },
};
</script>

<style scoped>
.main-timeline {
  position: relative;
}
.main-timeline-right {
  position: relative;
  padding-top: 60px;
}
.main-timeline:before {
  content: "";
  width: 3px;
  height: 100%;
  background: #2b2a2a;
  position: absolute;
  top: 0;
  right: 0;
}
.timeline-content {
  display: flex;
  position: relative;
}
.timeline-content::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #cca872;
  position: absolute;
  top: 80px;
  right: -13px;
}
.timeline-content::before {
  content: "";
  position: absolute;
  width: 80%;
  height: 5px;
  background: #cca872;
  top: 93px;
  right: 0;
}
.timeline-content-right {
  display: flex;
  position: relative;
}
.timeline-content-right::after {
  content: "";
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #fff;
  border: 4px solid #cca872;
  position: absolute;
  top: 80px;
  left: -16px;
}
.timeline-content-right::before {
  content: "";
  position: absolute;
  width: 80%;
  height: 5px;
  background: #cca872;
  top: 93px;
  left: 0;
}
.content {
  flex: 1;
  padding: 0 40px;
}
.year {
  display: block;
  padding: 10px;
  margin: 10px 0 50px 0;
  background: #cca872;
  border-radius: 7px;
  font-size: 25px;
  color: #fff;
  text-align: center;
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
.circle {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #fff;
  border: 8px solid #cca872;
  margin-right: 25px;
  margin-top: 30px;
  position: relative;
}
.circle div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 3px solid #adabab;
  font-size: 50px;
  color: #454344;
}
</style>