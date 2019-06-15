/* eslint-disable */
import modal from '../notice/modal'
export default {
  install (Vue, options) {
    let modal
    Vue.prototype.$modal = function (userConfig) {
      // 多次点击，销毁之前的toast
      if (modal) {
        console.log('销毁上一个')
        modal.close()
      }
      //  toast 为 createToast的实例
      modal = createModal({ Vue,
        userConfig,
        onClose: () => { console.log('监听到已关闭'); modal = null } })
    }
  }
}

function createModal ({ Vue, userConfig, onClose }) {
  // 挂载组件 并且返回Vue构造器的实例
  let Constructor = Vue.extend(modal)
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
