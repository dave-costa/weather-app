import "@/components/bosons/global.sass";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createPinia, PiniaVuePlugin } from "pinia";
import Vue from "vue";
import App from "./App.vue";
import router from "./core/router";
import vuetify from "./plugins/vuetify";
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
library.add(faMagnifyingGlass);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
  router,
  pinia,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
