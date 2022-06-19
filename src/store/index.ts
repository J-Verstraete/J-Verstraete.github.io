import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { StationClass } from '@/classes/StationClass';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stations: <StationClass[]>[],
    selectedStation: <StationClass | null>null
  },
  getters: {
    getStations(state) {
      return state.stations;
    },
    getSelectedStation(state) {
      return state.selectedStation;
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
    }
  },
  actions: {
    fetchStations(context) {
      axios.get('http://api.citybik.es/v2/networks/velo-antwerpen')
        .then((resp) => resp.data)
        .then((data) => data.network)
        .then((network) => {
          network.stations.forEach((station: StationClass) => context.commit('addStation', new StationClass(station)));
        });
    },
    selectStation(context, id: string) {
      const station = context.state.stations.find(s => s.id === id);
      station ? context.commit('selectStation', station) : context.commit('deselectStation');
    }
  },
  modules: {},
});
