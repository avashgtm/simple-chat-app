import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'
import './registerServiceWorker'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import fb from "@/firebase/init"

let vue = ''

Vue.config.productionTip = false

fb.auth().onAuthStateChanged(user => {
	store.dispatch("fetchUser", user);

	  if(!vue) {
	  	vue = new Vue({
	  	  router,
	  	  store,
	  	  render: h => h(App)
	  	}).$mount('#app')
	  }


});


