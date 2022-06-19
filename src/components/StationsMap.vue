<template>
  <div>
    <l-map style="height: 50vh" :zoom.sync="zoom" :center.sync="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="marker in markers"
                :lat-lng="marker.latlng"
                :icon="marker.icon" :key="marker.id"
                @click="clicked(marker)"
      >
        <l-popup >
          <v-row dense>
            <v-col><strong>{{ marker.name }}</strong></v-col>

          </v-row>
          <v-row dense style="width: 200pt">
            <v-col cols="auto">
              <v-icon>mdi-bicycle</v-icon>
              {{ marker.free_bikes }}
            </v-col>
            <v-col>
              <v-icon>mdi-lock-open-variant-outline</v-icon>
              {{ marker.empty_slots }}
            </v-col>
          </v-row>
          <v-row dense>
            <v-col>              <v-icon>mdi-map-marker-outline</v-icon>
              {{ marker.addres }}</v-col>
          </v-row>

        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LMap, LMarker, LPopup, LTileLayer } from 'vue2-leaflet';
import { StationClass } from '@/classes/StationClass';
import { MarkerClass } from '@/classes/MarkerClass';

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
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
    this.center = marker.latlng;
  }
}
</script>
<style>
.leaflet-popup-content-wrapper{
  background-color: #fff1ea;
}
.leaflet-popup-tip{
  background-color: #fff1ea;
}
</style>
