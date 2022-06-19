<template>
  <div>
    <v-rating
      @input="updateRating($event,stationId)"
      empty-icon="mdi-star-outline"
      full-icon="mdi-star"
      hover
      :length="5"
      :value="rating"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Rating extends Vue {
  @Prop(String) readonly stationId!: string;

  updateRating(rating: number, id: string) {
    this.$store.dispatch('updateRating', {
      rating,
      id
    });
  }

  get rating() {
    return this.$store.getters.getRatingById(this.stationId);
  }
}
</script>
