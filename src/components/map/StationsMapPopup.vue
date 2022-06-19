<template>
  <l-popup>
    <v-row dense>
      <v-col cols="auto"><strong>{{ marker.name }}</strong></v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-icon>mdi-bicycle</v-icon>
        {{ marker.free_bikes }}
      </v-col>
      <v-col>
        <v-icon>mdi-lock-open-variant-outline</v-icon>
        {{ marker.empty_slots }}
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <v-icon>mdi-map-marker-outline</v-icon>
        {{ marker.addres }}
      </v-col>
    </v-row>
    <v-row dense>
      <v-col>
        <rating :station-id="marker.id"/>
      </v-col>
    </v-row>
  </l-popup>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { LPopup } from 'vue2-leaflet';
import { MarkerClass } from '@/classes/MarkerClass';
import Rating from '@/components/Rating.vue';

@Component({
  components: {
    LPopup,
    Rating,
  },
})
export default class StationsMapPopup extends Vue {
  @Prop(Object) readonly marker!: MarkerClass;
}
</script>
