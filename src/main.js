/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-19 18:50:00
 * @LastEditTime: 2019-09-24 18:58:17
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import npm_store from 'npm_store'
import 'npm_store/lib/expPan.css'
import App from './App.vue'
//import expPannel from './assets/plugin/page.js'

Vue.config.productionTip = false
Vue.use(npm_store)

new Vue({
	render: h => h(App)
}).$mount('#app')
