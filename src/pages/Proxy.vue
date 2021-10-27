<template>
<div>
    <ProxyHero />   
    <ProxyBenefits2 /> 
    <ProxyBenefits3 /> 
    <ProxyBenefits /> 
    <UseCasesCarousel />  
    
    
    
</div>
</template>

<script>
import ProxyHero from '~/components/ProxyHero.vue'
import UseCasesCarousel from '~/components/UseCasesCarousel.vue'
import ProxyBenefits from '~/components/ProxyBenefits.vue'
import ProxyBenefits2 from '~/components/ProxyBenefits2.vue'
import ProxyBenefits3 from '~/components/ProxyBenefits3.vue'





export default {
  metaInfo: {
    title: 'Proxy'
  },
  components: {
    ProxyHero, 
    UseCasesCarousel,
    ProxyBenefits,
    ProxyBenefits2,
    ProxyBenefits3
  }
}



</script>