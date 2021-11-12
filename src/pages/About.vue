<template>
<div>
    <HeroAbout /> 
    <AboutSupporters />  
    <AboutContract />  
  <SocialFooter />
</div>
</template>

<script>
import Card from '~/components/Team.vue'
import HeroAbout from '~/components/HeroAbout.vue'
import AboutSupporters from '~/components/AboutSupporters.vue'
import AboutContract from '~/components/AboutContract.vue'







export default {
  metaInfo: {
    title: 'About us'
  },
  components: {
    Card, 
    HeroAbout, 
    AboutSupporters,
    AboutContract
  }
}



</script>
