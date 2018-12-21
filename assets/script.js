// google fonts
WebFontConfig = {
  google : {
    families: ['Montserrat:500', 'Noto Sans'],
  },
  timeout: 5000,
};

// mobile ua
if (window.navigator.userAgent.toLowerCase().indexOf('mobile') !== -1) {
  document.body.classList.add('is-ua-mobile');
}

// ga
(function () {
  window.dataLayer = window.dataLayer || [];

  function gtag() {
    dataLayer.push(arguments);
  }

  gtag('js', new Date());
  gtag('config', 'UA-38963765-4');
}());

// hubspot iframe load causes janky animations in firefox,
// wait for landing animation to complete
(function () {
  var hero = document.querySelector('#hero');

  function ready() {
    var script   = document.createElement('script');
    script.id    = 'hs-script-loader';
    script.async = true;
    script.src   = '//js.hs-scripts.com/5021877.js';
    document.body.appendChild(script);
    hero.removeEventListener('animationend', ready);
  }

  hero.addEventListener('animationend', ready);
}());
