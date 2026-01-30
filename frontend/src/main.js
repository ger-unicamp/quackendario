import Vue from "vue"
import VueWorker from "vue-worker"
import VueMeta from "vue-meta"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import { themeManager } from "./utils/themeManager"
import "./index.css"

// Initialize theme
themeManager.initializeTheme()

// Site Metadata
Vue.use(VueMeta)

// Workers
Vue.use(VueWorker)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
