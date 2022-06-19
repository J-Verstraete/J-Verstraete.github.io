<template>
  <div>
    v-
    {{ stations }}
    <hello-world/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import axios from 'axios'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  stations:object[] = [];

  mounted() {
    axios.get('http://api.citybik.es/v2/networks/velo-antwerpen')
      .then((resp) => resp.data)
      .then((data) => data.network)
      .then((network) => {
        network.stations.forEach((station: object) => this.stations.push(station));
      });
  }
}
</script>
