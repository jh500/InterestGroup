// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import * as firebase from 'firebase'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  //components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB94Sf8omterbmhpaUu63LvftiqhVG7SSo',
      authDomain: 'interestgroup-5005ace.firebaseapp.com',
      databaseURL: 'https://interestgroup-5005ace.firebaseio.com',
      projectId: 'interestgroup-5005ace',
      storageBucket: 'interestgroup-5005ace.appspot.com'
    })
  }
})
