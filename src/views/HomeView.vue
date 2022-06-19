<template>
  <div>
    <station-autocomplete/>
    <stations-map/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StationsMap from '@/components/StationsMap.vue';
import StationAutocomplete from '@/components/StationAutocomplete.vue';

@Component({
  components: {
    StationAutocomplete,
    StationsMap,
  },
})
export default class HomeView extends Vue {
}
</script>
