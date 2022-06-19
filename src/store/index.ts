import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { StationClass } from '@/classes/StationClass';

Vue.use(Vuex);

class RatingClass {
  stationId: string;
  rating: number;

  constructor(stationId: string, rating: number) {
    this.stationId = stationId;
    this.rating = rating;
  }
}

export default new Vuex.Store({
  state: {
    stations: <StationClass[]>[],
    selectedStation: <StationClass | null>null,
    loader: false,
    ratings: <RatingClass[]>[],
    userLocation: <number[] | null>null,
  },
  getters: {
    getStations(state) {
      return state.stations;
    },
    getSelectedStation(state) {
      return state.selectedStation;
    },
    getLoader(state) {
      return state.loader;
    },
    getRatingById: (state) => (stationId: string) => {
      const rating = state.ratings.find(todo => todo.stationId === stationId);
      return rating ? rating.rating : 3;
    },
    getUserLocation(state) {
      return state.userLocation;
    }
  },
  mutations: {
    addStation(state, station: StationClass) {
      state.stations.push(station);
    },
    clearStations(state) {
      state.stations = [];
    },
    selectStation(state, station: StationClass) {
      state.selectedStation = station;
    },
    deselectStation(state) {
      state.selectedStation = null;
    },
    setLoaderLoading(state) {
      state.loader = true;
    },
    setLoaderDone(state) {
      state.loader = false;
    },

    addRating(state, rating: RatingClass) {
      const existingRating = state.ratings.find(r => r.stationId === rating.stationId);
      if (existingRating) {
        existingRating.rating = rating.rating;
      } else {
        state.ratings.push(rating);
      }
    },
  },
  actions: {
    pollStations(context, delay: number) {
      delay = delay || 30000;
      context.dispatch('fetchStations');
      setTimeout(() => context.dispatch('pollStations', delay), delay);
    },
    fetchStations(context) {
      context.commit('setLoaderLoading');
      axios.get('https://api.citybik.es/v2/networks/velo-antwerpen')
        .then((resp) => resp.data)
        .then((data) => data.network)
        .then((network) => {
          context.commit('clearStations');
          network.stations.forEach((station: StationClass) => context.commit('addStation', new StationClass(station)));
        })
        .finally(() => setTimeout(() => context.commit('setLoaderDone'), 1500));
    },
    updateRating(context, {
      rating,
      id
    }) {
      context.commit('addRating', new RatingClass(id, rating));
    },
    selectStation(context, id: string) {
      const station = context.state.stations.find(s => s.id === id);
      station ? context.commit('selectStation', station) : context.commit('deselectStation');
    },
    async loadUserLocation(context) {
      navigator.geolocation.getCurrentPosition(
        position => {
          context.state.userLocation = [position.coords.latitude, position.coords.longitude];
        },
        error => {
          console.warn(error.message);
        },
      );
    }
  },
  modules: {},
});
