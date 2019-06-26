import Vue from "vue";
window.$ = window.jQuery = require("jquery");
Vue.use({
  install: function (Vue) {
    Vue.prototype.$jQuery = require("jquery"); // you'll have this.$jQuery anywhere in your vue project
  }
});
