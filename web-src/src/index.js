/*  */
require("@adobe/coral-spectrum/dist/js/coral.js");
require("@adobe/coral-spectrum/dist/css/coral.css");

import config from './config.json'
import Vue from 'vue';
import App from './App.vue';


// Vue App bootstrap
new Vue({
  el: "#root",
  render: h => h(App)
});

/**
if ('exc-module-runtime' in window) {
  bootstrap()
} else {
  window.EXC_MR_READY = () => bootstrap()
}

function bootstrap () {
  const Runtime = window['exc-module-runtime'].default
  const runtime = new Runtime({ canTakeover: true })

  window.runtime = runtime
  runtime.customEnvLabel = 'ahmeds-io-app'


  // set a favicon
  // runtime.favicon = 'url-to-favicon'

  // respond to clicks on the app-bar title
  // runtime.heroClick = () => window.alert('Did I ever tell you you\'re my hero?')

  // ready event brings in authentication/user info
  runtime.on('ready', ({ imsOrg, imsToken, imsProfile, locale }) => {
    console.log('Ready! received imsProfile:', imsProfile)
    window.imsProfile = imsProfile
  })

  // respond to history change events
  runtime.historyChange = path => {
    console.log('history changed :: ', path)
    // this.history.replace(path)
    // this.setState({currentPath: `/${path}`})
  }

  // set solution info, shortTitle is used when window is too small to dispay full title
  runtime.solution = {
    icon: 'AdobeExperienceCloud',
    title: 'ahmeds-io-app',
    shortTitle: 'JGR'
  }
  runtime.title = 'ahmeds-io-app'

  // tell the exc-runtime object we are done
  runtime.done()
}
*/