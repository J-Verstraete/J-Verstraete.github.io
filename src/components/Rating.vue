<template>
  <v-rating
    @input="updateRating($event,station.id)"
    empty-icon="mdi-star-outline"
    full-icon="mdi-star"
    hover
    :length="5"
    :value="rating"
  />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { StationClass } from '@/classes/StationClass'; // @ is an alias to /src

@Component({})
export default class Rating extends Vue {
  @Prop(Object) readonly station!: StationClass;

  updateRating(rating: number, id: string) {
    this.$store.dispatch('updateRating', {
      rating,
      id
    });
  }

  get rating() {
    return this.$store.getters.getRatingById(this.station.id);
  }
}
</script>
