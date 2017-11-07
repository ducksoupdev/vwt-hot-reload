import Vue from 'vue';
import VueRouter, { Location, Route, RouteConfig } from 'vue-router';
import { isHot, makeHot, reload } from './hot-reload';

import { HomeComponent } from './components/home';
import { AboutComponent } from './components/about';
import { ListComponent } from './components/list';

if (isHot) {
  makeHot('./components/home', HomeComponent,
    module.hot.accept('./components/home', () => reload('./components/home', (<any>require('./components/home')).HomeComponent)));

  makeHot('./components/about', AboutComponent,
    module.hot.accept('./components/about', () => reload('./components/about', (<any>require('./components/about')).AboutComponent)));

  makeHot('./components/list', ListComponent,
    module.hot.accept('./components/list', () => reload('./components/list', (<any>require('./components/list')).ListComponent)));
}

Vue.use(VueRouter);

export const createRoutes: () => RouteConfig[] = () => [
  {
    path: '/',
    component: HomeComponent,
  },
  {
    path: '/about',
    component: AboutComponent,
  },
  {
    path: '/list',
    component: ListComponent,
  }
];

export const createRouter = () => new VueRouter({ mode: 'history', routes: createRoutes() });
