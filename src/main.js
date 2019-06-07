import Vue from 'vue';
import App from './App';
import router from './lib/router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});

// google analytics

(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-38963765-4');
}());
