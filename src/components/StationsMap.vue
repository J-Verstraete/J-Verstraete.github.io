<template>
  <div>
    <l-map style="height: 50vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="markerLatLng" :icon="icon"/>
    </l-map>

  </div>
</template>

<script lang="ts">
import L from 'leaflet';
import { Component, Vue } from 'vue-property-decorator';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
})
export default class StationsMap extends Vue {
  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  zoom = 15;
  center = [51.505, -0.159];
  markerLatLng = [51.504, -0.159];

  icon = L.icon({
    iconUrl: require('@/assets/logo.png'),
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  });
}
</script>
