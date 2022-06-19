<template>
  <div>
    <l-map style="height: 50vh" :zoom.sync="zoom" :center.sync="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="marker in markers"
                :lat-lng="marker.latlng"
                :icon="marker.icon" :key="marker.id"
                @click="clicked(marker)"
      >
        <stations-map-popup :marker="marker"/>
      </l-marker>
    </l-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';
import StationsMapPopup from '@/components/map/StationsMapPopup.vue';
import { StationClass } from '@/classes/StationClass';
import { MarkerClass } from '@/classes/MarkerClass';

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    StationsMapPopup,
  },
})
export default class StationsMap extends Vue {
  @Prop(Array) readonly stations!: StationClass[];
  @Prop(Object) readonly selectedStation!: StationClass | null;

  url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  attribution = '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
  zoom = 15;
  center = [51.221223, 4.399851];

  get markers(): MarkerClass[] {
    return this.stations.map(station => new MarkerClass(station));
  }

  clicked(marker: MarkerClass) {
    this.center = marker.latlng;
    this.selectStation(marker.id);
  }

  selectStation(id: string) {
    this.$emit('select', id);
  }

  @Watch('selectedStation')
  onSelectedStationUpdate(newVal: StationClass, oldVal: StationClass) {
    if (oldVal?.id !== newVal?.id) {
      console.log('Selected station update');
      if (newVal && newVal?.id !== '') {
        const selectedMarker = this.markers.find(marker => marker.id === newVal.id);
        if (selectedMarker) {
          selectedMarker.name = 'YEEEES';
          selectedMarker.select();
          this.center = selectedMarker.latlng;
        }
      }
      if (oldVal && oldVal?.id !== '') {
        const unselectedMarker = this.markers.find(marker => marker.id === oldVal.id);
        if (unselectedMarker) {
          unselectedMarker.deselect();
        }
      }
    }
  }
}
</script>


<style>
.leaflet-popup-content-wrapper {
  background-color: #fff1ea;
}

.leaflet-popup-tip {
  background-color: #fff1ea;
}
</style>
