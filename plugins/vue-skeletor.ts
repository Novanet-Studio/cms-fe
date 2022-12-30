import { Skeletor } from "vue-skeletor";
import 'vue-skeletor/dist/vue-skeletor.css';

export default defineNuxtPlugin((plugin) => {
  plugin.vueApp.component("Skeletor", Skeletor);
});
