import Vue from 'vue';
import VueRouter from 'vue-router';
import { isHot, makeHot, reload } from './hot-reload';
import { NavbarComponent } from './components/navbar';
import { createRouter } from './router';

import './sass/main.scss';

if (isHot) {
  makeHot('./components/navbar', NavbarComponent,
    module.hot.accept('./components/navbar', () => reload('./components/navbar', (<any>require('./components/navbar')).NavbarComponent)));
}

new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': NavbarComponent
  }
});
