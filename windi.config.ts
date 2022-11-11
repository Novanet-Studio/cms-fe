import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: '#F18A00',
        secondary: '#001E61',
        tertiary: '#231F20',
        grayMid: '#A7A9AC',
        grayLight: '#E6E7E8',
      },
      textColor: {
        primary: '#3490dc',
        secondary: 'green',
        info: 'blue',
      },
    },
  },
});
