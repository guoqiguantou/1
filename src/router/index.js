import Vue from 'vue';
import VueRouter from 'vue-router';
import {SiderNav} from './menu';
Vue.use (VueRouter);
const router = new VueRouter ({
  mode: 'history',
  base: '/',
  routes: SiderNav,
});


export default router;
