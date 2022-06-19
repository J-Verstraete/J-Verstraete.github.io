<template>
  <div>
    <stations-map :stations="stations" :selected-station="selectedStation" @select="selectStation"/>

    <v-list dense>
      <v-subheader>Stations</v-subheader>
      <v-list-item-group
        v-model="selectedStation"
        color="primary"
      >
        <v-list-item
          v-for="(station, i) in stations"
          :key="i"
          :value="station"
        >
          <v-list-item-icon>
            <v-icon>mdi-bike</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="station.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';
import StationsMap from '@/components/StationsMap.vue';
import { StationClass } from '@/classes/StationClass'; // @ is an alias to /src

@Component({
  components: {
    StationsMap,
  },
})
export default class HomeView extends Vue {
  stations: StationClass[] = [];
  selectedStation: StationClass | null = null;

  mounted() {
    axios.get('http://api.citybik.es/v2/networks/velo-antwerpen')
      .then((resp) => resp.data)
      .then((data) => data.network)
      .then((network) => {
        network.stations.forEach((station: StationClass) => this.stations.push(new StationClass(station)));
      });
  }

  selectStation(id: string) {
    this.selectedStation = this.stations.find(station => station.id === id)||null;
  }
}
</script>
