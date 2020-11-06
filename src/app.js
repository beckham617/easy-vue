import 'ratchet-npm/dist/css/ratchet.css'; // get ratchet
import 'font-awesome/css/font-awesome.css'; // get font-awesome
import 'animate.css/animate.css'; // get animate.css

// import FastClick from 'fastclick';
import Vue from 'vue'; // get vue
import VueMaterial from 'vue-material'
import VueProgressBar from 'vue-progressbar'; // get vue-progressbar
import InfiniteScroll from 'vue-infinite-scroll'; // get vue-infinite-scroll

import App from './app.vue'; // get root module
import router from './router';
import store from './store'; // get vuex -> store

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// FastClick.attach(document.body); // init fastclick
const options = {
  color: '#fff',
  failedColor: '#874b4b',
  thickness: '3px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s'
  },
  autoRevert: true,
  location: 'top',
  inverse: false
};
Vue.use(VueProgressBar, options);
Vue.use(InfiniteScroll);
Vue.use(VueMaterial)

// init
const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
