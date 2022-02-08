<template>
  <l-map style="height: 50vh">
    <l-geo-json :geojson="geojson" :options="geojsonOptions" />
  </l-map>
</template>

<script>
//地圖bug
import "leaflet/dist/leaflet.css";
import { LMap, LGeoJson } from "@vue-leaflet/vue-leaflet";
export default {
  name: "Map",
  components: {
    LMap,
    LGeoJson,
  },
  data() {
    return {
      geojson: {
        type: "FeatureCollection",
        features: [
          // ...
        ],
      },
      geojsonOptions: {
        // Options that don't rely on Leaflet methods.
      },
    };
  },
  async beforeMount() {
    // HERE is where to load Leaflet components!
    const { circleMarker } = await import("leaflet/dist/leaflet-src.esm");

    // And now the Leaflet circleMarker function can be used by the options:
    this.geojsonOptions.pointToLayer = (feature, latLng) =>
      circleMarker(latLng, { radius: 8 });
    this.mapIsReady = true;
  },
};
</script>

<style scoped>
.main-container {
  height: 500px;
}
</style>