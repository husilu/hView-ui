/* eslint-disable */
import toast from '../notice/toast'
export default {
  install (Vue, options) {
    let toast
    Vue.prototype.$toast = function (userConfig) {
      // 多次点击，销毁之前的toast
      if (toast) {
        console.log('销毁上一个')
        toast.close()
      }
      //  toast 为 createToast的实例
      toast = createToast({ Vue,
        userConfig,
        onClose: () => { console.log('监听到已关闭'); toast = null } })
    }
  }
}

function createToast ({ Vue, userConfig, onClose }) {
  // 挂载组件 并且返回Vue构造器的实例
  let Constructor = Vue.extend(toast)
  let vm = new Constructor({
    propsData: {
      ...userConfig
    }
  })

  vm.message = userConfig.message
  vm.$on('closed', onClose)
  vm.$mount()
  document.body.appendChild(vm.$el)
  return vm
}
