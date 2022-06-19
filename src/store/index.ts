import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { StationClass } from '@/classes/StationClass';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: <StationClass[]>[],
    selectedStation: <StationClass | null>null,
    loader: false,
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
      console.log('new selected', station);
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
    selectStation(context, id: string) {
      const station = context.state.stations.find(s => s.id === id);
      station ? context.commit('selectStation', station) : context.commit('deselectStation');
    }
  },
  modules: {},
});
