const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  pwa: {
    name: 'Velo-finder',
    themeColor: '#ff5a00',
  }
});
