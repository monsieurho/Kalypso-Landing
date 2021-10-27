const c1 = () => import(/* webpackChunkName: "page--src--pages--vpn-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/src/pages/Vpn.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--proxy-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/src/pages/Proxy.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--demo-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/src/pages/Demo.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--cdn-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/src/pages/Cdn.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/gregoryjose/Downloads/Rainbow (fixed build)/src/pages/Index.vue")

export default [
  {
    path: "/vpn/",
    component: c1
  },
  {
    path: "/proxy/",
    component: c2
  },
  {
    path: "/demo/",
    component: c3
  },
  {
    path: "/cdn/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
