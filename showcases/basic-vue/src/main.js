// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@staytuned-io/sdk'

Vue.config.productionTip = false

window.staytunedReady = () => {
  window.staytunedSDK.init(
    {
      appId: '', // Your appID
      authToken: '', // Your authToken
      opts: {
        debug: true
      }
    },
    async () => {
      const contentList = await window.staytunedSDK.STContents.getContents()
      console.log(contentList)
    }
  )
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
