<template>
  <v-container>
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
          color="primary"
        >
          <v-list-item
            @click="selectStation(station)"
            v-for="(station, i) in filteredStations"
            :key="i"
            :value="station"
          >
            <v-list-item-avatar>
              <v-icon>mdi-bike</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-text="station.name"/>
              <v-list-item-subtitle v-text="station.extra.address"/>
            </v-list-item-content>
            <v-list-item-action @click.stop>
              <rating :station-id="station.id"/>
            </v-list-item-action>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { StationClass } from '@/classes/StationClass'; // @ is an alias to /src
import Rating from '@/components/Rating.vue';

@Component({
  components: { Rating }
})
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
    console.log('select stations,', station);
    this.$store.dispatch('selectStation', station.id);
    this.$router.push({ name: 'home' });
  }

  updateRating(rating: number, id: string) {
    this.$store.dispatch('updateRating', {
      rating,
      id
    });
  }
}
</script>
