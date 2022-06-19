<template>
  <div>
    <l-map style="height: 50vh" :zoom="zoom" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="marker in markers"
                :lat-lng="marker.latlng"
                :icon="marker.icon" :key="marker.id"/>
    </l-map>
  </div>
</template>

<script lang="ts">
import L from 'leaflet';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';
import { StationClass } from '@/classes/StationClass';

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
})
export default class StationsMap extends Vue {
  @Prop(Array) readonly stations!: StationClass[];

  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  zoom = 15;
  center = [51.221223, 4.399851];

  get markers() {
    return this.stations.map(station => {
      return {
        icon: this.getIcon(),
        latlng: [station.latitude, station.longitude],
        id: station.id,
      };
    });
  }

  private getIcon() {
    return L.icon({
      iconUrl: require('@/assets/pin.svg'),
      iconSize: [30, 30],
      iconAnchor: [15, 30]
    });
  }
}
</script>
