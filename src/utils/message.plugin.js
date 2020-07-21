import M from '@/assets/js/components/materialize.js'

export default {
  install(Vue) {
    Vue.prototype.$message = function(text) {
      M.toast({html: text})
    }

    Vue.prototype.$error = function(html) {
      M.toast({html: `[Ошибка]: ${html}`})
    }
  }
}
