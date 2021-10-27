<template >
  <Layout>
    <ClientOnly>
  <transition name="fade" >
    <router-view />  
  </transition>
    </ClientOnly>
  <Footer />
    </Layout>
    
    
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Default from '~/layouts/Default.vue'
import Index from '~/pages/Index.vue'
import Footer from '~/layouts/Footer.vue'
            // import VueScrollReveal from 'vue-scroll-reveal';


export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        }
      ]
    }
  },
        components: {
            Default,
            Index,
            Footer
            
        }
        
}


</script>

<style>
.fade-enter-active {
  transition: opacity .7s;
}

.fade-enter {
  opacity: 0;
}
</style>
