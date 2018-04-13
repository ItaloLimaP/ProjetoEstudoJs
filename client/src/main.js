require("./main.css")

const Vue = require("vue")
const VueMaterial = require("vue-material")

// http://vuematerial.io/#/getting-started
Vue.use(VueMaterial)

Vue.component("it-festa", require("./components/festa.vue"))

new Vue({
  el:"#app",
  render: r => r(require("./features/cadastro.vue"))
})