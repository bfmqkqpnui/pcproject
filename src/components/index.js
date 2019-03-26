const install = (Vue) => {
  if (install.installed) return;

  Vue.component('t-nav', resolve => {
    require(['./nav'], resolve)
  })

  Vue.component('t-bottom', resolve => {
    require(['./bottom'], resolve)
  })

  if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }
}

export default install
