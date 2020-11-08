// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import "./assets/style.css";
import VueRx from "vue-rx";
import VTooltip from "v-tooltip";

Vue.config.productionTip = false;

Vue.use(VueRx);
Vue.use(VTooltip);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
