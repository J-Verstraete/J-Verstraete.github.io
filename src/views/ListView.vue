<template>
  <div>
    <h1>This is a list-view</h1>

    {{ selectedStation }}
    <v-list dense>
      <v-subheader>Stations</v-subheader>
      <v-list-item-group
        :value="selectedStation"
        @change="selectStation($event)"
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
import { StationClass } from '@/classes/StationClass'; // @ is an alias to /src

@Component({})
export default class ListView extends Vue {
  get stations(): StationClass[] {
    return this.$store.getters.getStations;
  }

  get selectedStation(): StationClass {
    return this.$store.getters.getSelectedStation;
  }

  selectStation(station: StationClass) {
    this.$store.dispatch('selectStation', station.id);
    this.$router.push({ name: 'home' });
  }
}
</script>
