import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import importAll from "@/components/core/globales";

importAll(
	require.context("@/components", false, /Base[A-Z]\w+\.vue$/),
	(name, component) => { Vue.component(name, component); }
);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
