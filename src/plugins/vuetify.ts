import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#ff5a00',
        primaryAccent1: '#fff1ea',
        primaryAccent2: '#728F9B',
        primaryAccent3: '#B7C9CD',
        secondary: '#38373A',
        secondaryAccent1: '#6B6C6E',
        secondaryAccent2: '#98999B',
        secondaryAccent3: '#C2C3C4',
        success: '#1A5924',
        successAccent1: '#4AA832',
        successAccent2: '#9FCB8A',
        error: '#C83C22',
        errorAccent1: '#E8754C',
        errorAccent2: '#EBA386',
        info: '#075E8D',
        infoAccent1: '#3F7A9C',
        infoAccent2: '#6098B6',

        white: '#fff',
      },
    },
  },
});
