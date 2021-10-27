<template>
<div>
    <VpnHero /> 
    <VpnBenefits />  
</div>
</template>

<script>
import VpnHero from '~/components/VpnHero.vue'
import VpnBenefits from '~/components/VpnBenefits.vue'




export default {
  metaInfo: {
    title: 'VPN'
  },
  components: {
    VpnHero,
    VpnBenefits
  }
}



</script>