// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'

// In main.js
// import VueScrollReveal from 'vue-scroll-reveal';

// Using ScrollReveal's default configuration
// Vue.use(VueScrollReveal);

// // OR specifying custom default options for all uses of the directive
// Vue.use(VueScrollReveal, {
//   class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
//   duration: 800,
//   scale: 1,
//   distance: '10px',
//   mobile: false
// });
import VueScrollReveal from 'gridsome-scroll-reveal';

Vue.use(VueScrollReveal);
 
// OR specifying custom default options for all uses of the directive
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});
export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

