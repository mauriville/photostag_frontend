import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import i18n from './i18n'
import VueSweetalert2 from 'vue-sweetalert2';

import VueToast from 'vue-toast-notification';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueSweetalert2);
Vue.use(VueToast);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCWkx1y-YK2ZoqkNuwPRKOCIIkQnws7QEY',
  },
 
})
Vue.component('gmap-map', VueGoogleMaps.Map);
Vue.component('gmap-marker', VueGoogleMaps.Marker);

Vue.config.productionTip = false


new Vue({
  vuetify,
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')
