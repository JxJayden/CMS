import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-default/index.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
