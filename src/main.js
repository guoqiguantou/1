import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import * as echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/common.less';


Vue.use(ElementUI);//全量引用
Vue.prototype.$echarts = echarts;
var vue = new Vue ({
  router,
  store,
  render: h => h (App),
}).$mount ('#app');

export default vue;
