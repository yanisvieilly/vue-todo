import Vue from "vue";

import App from "./components/app";

(() =>
  new Vue({
    el: "#main",
    render(h) {
      return h(App);
    }
  }))();
