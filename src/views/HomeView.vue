<template>
  <div>
    <v-autocomplete v-model="selectedStation"
                    :items="stationsForAutocomplete"/>
    <stations-map/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StationsMap from '@/components/StationsMap.vue';
import { StationClass } from '@/classes/StationClass';

@Component({
  components: {
    StationsMap,
  },
})
export default class HomeView extends Vue {
  get stations(): StationClass[] {
    return this.$store.getters.getStations;
  }

  get selectedStation(): StationClass {
    return this.$store.getters.getSelectedStation;
  }

  selectStation(id: string) {
    this.$store.dispatch('selectStation', id);
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
