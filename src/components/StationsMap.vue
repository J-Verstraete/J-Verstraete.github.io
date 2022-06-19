<template>
  <l-map style="height: 92vh;z-index: 0"
         :zoom.sync="zoom"
         :center.sync="center"
         @click="selectStation('')"
  >
    <l-tile-layer :url="url" :attribution="attribution"/>
    <l-marker v-for="marker in markers"
              :lat-lng="marker.latlng"
              :icon="marker.icon" :key="marker.id"
              @click="clicked(marker)"
    >
      <stations-map-popup :marker="marker"/>
    </l-marker>
    <l-marker v-if="userLocation"
              :lat-lng="userLocation"
              :icon="userLocationIcon"
    />
  </l-map>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { LMap, LMarker, LTileLayer } from 'vue2-leaflet';
import StationsMapPopup from '@/components/map/StationsMapPopup.vue';
import { StationClass } from '@/classes/StationClass';
import { MarkerClass } from '@/classes/MarkerClass';
import L from 'leaflet';

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    StationsMapPopup,
  },
})
export default class StationsMap extends Vue {
  created() {
    if (this.selectedStation) {
      this.zoom = 18;
      this.onSelectedStationUpdate(this.selectedStation, null);
    } else if (this.userLocation) {
      this.center = this.userLocation;
    }
  }

  get stations(): StationClass[] {
    return this.$store.getters.getStations;
  }

  get selectedStation(): StationClass {
    return this.$store.getters.getSelectedStation;
  }

  get userLocation() {
    return this.$store.getters.getUserLocation;
  }

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

  clickMap() {
    this.selectStation('');
  }

  selectStation(id: string) {
    this.$store.dispatch('selectStation', id);
  }

  @Watch('selectedStation')
  onSelectedStationUpdate(newVal: StationClass | null, oldVal: StationClass | null) {
    if (oldVal?.id !== newVal?.id) {
      if (newVal && newVal?.id !== '') {
        const selectedMarker = this.markers.find(marker => marker.id === newVal.id);
        if (selectedMarker) {
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

  userLocationIcon =
    L.icon({
      iconUrl: require('@/assets/current-location.svg'),
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });
}
</script>
