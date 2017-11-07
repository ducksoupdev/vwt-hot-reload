import Vue, { Component } from 'vue';
import * as api from 'vue-hot-reload-api';

export const isHot = () => process.env.ENV === 'development' && module.hot;

export function makeHot(id: string, component: Component, acceptFunc: void) {
  if (isHot()) {
    api.install(Vue);
    if (!api.compatible) {
      throw new Error('vue-hot-reload-api is not compatible with the version of Vue you are using.');
    }

    api.createRecord(id, component);
  }
}

export const reload = api.reload;
