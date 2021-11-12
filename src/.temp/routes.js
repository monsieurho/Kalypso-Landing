const c1 = () => import(/* webpackChunkName: "page--src--pages--vpn-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Vpn.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--terms-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Terms.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--privacy-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Privacy.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--proxy-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Proxy.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--demo-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Demo.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--cdn-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Cdn.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/About.vue")
const c8 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/gregoryjose/Kalypso-Landing/node_modules/gridsome/app/pages/404.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/gregoryjose/Kalypso-Landing/src/pages/Index.vue")

export default [
  {
    path: "/vpn/",
    component: c1
  },
  {
    path: "/terms/",
    component: c2
  },
  {
    path: "/privacy/",
    component: c3
  },
  {
    path: "/proxy/",
    component: c4
  },
  {
    path: "/demo/",
    component: c5
  },
  {
    path: "/cdn/",
    component: c6
  },
  {
    path: "/about/",
    component: c7
  },
  {
    name: "404",
    path: "/404/",
    component: c8
  },
  {
    name: "home",
    path: "/",
    component: c9
  },
  {
    name: "*",
    path: "*",
    component: c8
  }
]
