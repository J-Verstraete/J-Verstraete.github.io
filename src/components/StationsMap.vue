<template>
  <div>
    <l-map style="height: 50vh" :zoom.sync="zoom" :center.sync="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="marker in markers"
                :lat-lng="marker.latlng"
                :icon="marker.icon" :key="marker.id"
                @click="clicked(marker)"
      />
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';
import { StationClass } from '@/classes/StationClass';
import { MarkerClass } from '@/classes/MarkerClass';

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

  get markers(): MarkerClass[] {
    return this.stations.map(station => new MarkerClass(station));
  }

  clicked(marker: MarkerClass) {
   this.center =marker.latlng
  }
}
</script>
