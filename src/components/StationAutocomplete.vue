<template>
  <v-card max-width="300pt" style="position: absolute;   left: 0;right: 0;margin: auto;
  top: 8pt; z-index: 1" class="pa-2 pb-0">
    <v-autocomplete
      label="Zoek"
      :value="selectedStation"
      :items="stationsForAutocomplete"
      @input="selectStation"
    />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StationClass } from '@/classes/StationClass'; //

@Component({})
export default class StationAutocomplete extends Vue {
  get stations(): StationClass[] {
    return this.$store.getters.getStations;
  }

  get selectedStation(): StationClass {
    return this.$store.getters.getSelectedStation;
  }

  selectStation(station: StationClass | null) {
    this.$store.dispatch('selectStation', station?.id || null);
  }

  get stationsForAutocomplete() {
    return this.stations.map(station => {
      return {
        text: station.name,
        value: station
      };
    });
  }
}
</script>
