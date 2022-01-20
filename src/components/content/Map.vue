<template>
  <div class="map-container" id="map-container" />
</template>

<script>
import { onMounted, ref } from "vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
export default {
  name: "Map",
  //地圖沒出來啊幹..
  setup() {
    let map = ref(null);
    let url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const createMap = (divId, options) => {
      let map = L.map(divId, options);
      return map;
    };
    const createTileLayer = (map, url, options) => {
      let tileLayer = L.tileLayer(url, options);
      tileLayer.addTo(map);
      return tileLayer;
    };
    onMounted(() => {
      map = createMap("map-container");
      createTileLayer(map, url, { maxZoom: 19 });
    });
    return {
      map,
      url,
    };
  },
};
</script>

<style scoped>
.main-container {
  height: 500px;
}
</style>