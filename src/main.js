// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBozILPjuOV94KSrulSNkNF_NAZ9RHTioA',
  authDomain: 'vue-firebase-tutorial-383fb.firebaseapp.com',
  databaseURL: 'https://vue-firebase-tutorial-383fb.firebaseio.com',
  projectId: 'vue-firebase-tutorial-383fb',
  storageBucket: '',
  messagingSenderId: '756195585775'
}

firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
