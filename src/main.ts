import Vue from 'vue';
import VueRouter from 'vue-router';
import { isHot, makeHot, reload } from './hot-reload';
import { NavbarComponent } from './components/navbar';
import { createRouter } from './router';

import './sass/main.scss';

if (isHot()) {
  const navbarModuleId = './components/navbar';

  // first arguments for `module.hot.accept` and `require` methods have to be static strings
  // see https://github.com/webpack/webpack/issues/5668
  makeHot(navbarModuleId, NavbarComponent,
    module.hot.accept('./components/navbar', () => reload(navbarModuleId, (<any>require('./components/navbar')).NavbarComponent)));
}

new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': NavbarComponent
  }
});
