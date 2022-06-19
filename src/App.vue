<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src=" require('@/assets/logo-velo.svg')"

          transition="scale-transition"
          width="40"
        />
        <h2>
          Velo-finder
        </h2>
      </div>

      <v-spacer></v-spacer>
      <router-link to="/" class="ml-2 mr-2">
        <v-icon>mdi-map</v-icon>
      </router-link>
      |
      <router-link to="/list" class="ml-2 mr-2">
        <v-icon>mdi-format-list-bulleted</v-icon>
      </router-link>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
  mounted() {
    this.$store.dispatch('fetchStations');
  }
});
</script>
