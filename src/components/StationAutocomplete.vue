<template>
  <v-autocomplete :value="selectedStation"
                  :items="stationsForAutocomplete"
                  @input="selectStation"
  />
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
