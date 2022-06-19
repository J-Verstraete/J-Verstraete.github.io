<template>
  <div style="background-color: #fff1ea;">
    <v-container style="background-color: #fff1ea;">
      <v-card class="pa-3">
        <v-card-title>
          Find your station
        </v-card-title>
        <v-radio-group v-model="searchFilter">
          <v-radio
            label="All stations"
            value="All"
          />
          <v-radio
            label="Empty stations"
            value="Empty"
          />
          <v-radio
            label="Full stations"
            value="Full"
          />
        </v-radio-group>

        <v-list dense>
          <v-subheader>Stations</v-subheader>
          <v-list-item-group
            :value="selectedStation"
            @change="selectStation($event)"
            color="primary"
          >
            <v-list-item
              v-for="(station, i) in filteredStations"
              :key="i"
              :value="station"
            >
              <v-list-item-icon>
                <v-icon>mdi-bike</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="station.name"/>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StationClass } from '@/classes/StationClass'; // @ is an alias to /src

@Component({})
export default class ListView extends Vue {
  searchFilter = 'All';

  get stations(): StationClass[] {
    return this.$store.getters.getStations;
  }

  get filteredStations() {
    switch (this.searchFilter) {
      case 'Empty':
        return this.stations.filter(station => station.isEmpty());
      case 'Full':
        return this.stations.filter(station => station.isFull());
      default:
        return this.stations;
    }
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
