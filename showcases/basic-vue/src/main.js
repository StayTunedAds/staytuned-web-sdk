// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@staytuned-io/sdk'

Vue.config.productionTip = false

window.staytunedReady = () => {
  staytunedSDK.init(
    {
      appId: '', // Your appID
      authToken: '', // Your authToken
      opts: {
        debug: true
      }
    },
    async () => {
      // List sections
      const sectionList = await staytunedSDK.STSections.getSections()
      console.log(sectionList);

      // List contents (will retrieve light contents)
      const contentList = await staytunedSDK.STContents.getContents()
      console.log(contentList)

      // Get one content (get full content)
      // const content = await staytunedSDK.STContents.getContent('one-content-key')
      // console.log(content)
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
