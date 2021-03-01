import Vue from 'vue'

import Assessment from './Assessment';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    window.latitude = position.coords.latitude;
    window.longitude = position.coords.longitude;
  });
} else {
  window.latitude = '0.00';
  window.longitude = '0.00';
}

const app = new Vue({
  el: '#app',
  components: { Assessment }
});
