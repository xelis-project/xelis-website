import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const preRenderMixin =  {
    data() {
      return {
        preRendered: false,
      };
    },
    mounted() {
      if (window.__PRERENDER_INJECTED) {
        this.preRendered = true;
      }
    },
};


const app = createApp(App);
app.mixin(preRenderMixin);
app.use(store);
app.use(router);
app.mount('#app');
