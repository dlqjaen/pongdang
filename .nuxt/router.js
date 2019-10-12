import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3cb0f71c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3460094c = () => interopDefault(import('../pages/_id.vue' /* webpackChunkName: "pages/_id" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3cb0f71c,
    name: "index"
  }, {
    path: "/:id",
    component: _3460094c,
    name: "id"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
