import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

import ElementAfter from '@/views/Element/after'
import ElementAnimate from '@/views/Element/animate'
import ElementAppend from '@/views/Element/append'
import ElementDrag from '@/views/Element/drag'
import Editor from '@/views/Element/editor'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/element/after',
    name: 'element-after',
    component: ElementAfter,
    meta: {
      title: 'Element.after()'
    }
  }, {
    path: '/element/animate',
    name: 'element-animate',
    component: ElementAnimate,
    meta: {
      title: 'Element.animate() 点击变色(动画)'
    }
  }, {
    path: '/element/append',
    name: 'element-append',
    component: ElementAppend,
    meta: {
      title: 'Element.append()'
    }
  }, {
    path: '/element/darg',
    name: 'element-darg',
    component: ElementDrag,
    meta: {
      title: 'Element.drag()'
    }
  }, {
    path: '/editor',
    name: 'editor',
    component: Editor,
    meta: {
      title: 'Editor'
    }
  }]
})
