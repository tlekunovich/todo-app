import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import vuetify from '@/plugins/vuetify'


createApp(App)
    .use(router)
    // .use(vuetify)
    .mount('#app')
// Vue.config.productionTip = false;

// new Vue({
//     router,
//     render: (h) => h(App),
//   }).$mount("#app");