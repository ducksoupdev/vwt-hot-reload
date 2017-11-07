import Vue from 'vue';
import VueRouter from 'vue-router';

import './sass/main.scss';

import { NavbarComponent } from './components/navbar';

import { createRouter } from './router';

new Vue({
  el: '#app-main',
  router: createRouter(),
  components: {
    'navbar': NavbarComponent
  }
});
