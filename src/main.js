import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
//import { routes } from "./routes";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Slider from './components/Slider.vue'
import Category from './components/Category.vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    { path : '/' , component : Category   },
    { path : '/hp' , component : Slider   }
    //{ path : '/user' , components : User   }

],
  mode : 'history' //hash: Default
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
