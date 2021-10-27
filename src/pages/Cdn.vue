<template>
<div>
    <CdnHero />   
     <CdnDetails /> 
</div>
</template>

<script>
import CdnHero from '~/components/CdnHero.vue'
import CdnDetails from '~/components/CdnDetails.vue'



export default {
  metaInfo: {
    title: 'Content Delivery Network'
  },
  components: {
    CdnHero,
    CdnDetails
  }
}



</script>
