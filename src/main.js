import Vue from 'vue';
import App from './App';
import router from './lib/router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
