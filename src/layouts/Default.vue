<template>
  <div class="layout">
    <header class="header">
        <g-link to="/"><img src="../assets/Kalypso-blue.png" class="logo_bcn" alt=""></g-link>
      <nav class="nav main-nav">
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/proxy/">Proxy</g-link>
        <g-link class="nav__link" to="/vpn/">VPN</g-link>
        <g-link class="nav__link" to="/cdn/">CDN</g-link>
        
      </nav>
      <nav class="nav app-nav">
        <g-link class="nav__link getting-started" to="/demo/">Try the Demo</g-link>
        </nav>
    </header>
    <slot/>
    <SocialFooter /> 
    <ipFooter /> 

  </div>
</template>
<script>
import SocialFooter from '~/components/SocialFooter.vue'
import ipFooter from '~/components/ipFooter.vue'




export default {
  components: {
    SocialFooter,
    ipFooter
  }
}
</script>


<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
* {
	box-sizing: border-box;
}

body {
  font-family: SF Mono, sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  margin: 0 auto;
}

.header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
  max-width: 1500px;
  margin:auto;
  padding-left:50px;
  padding-right:50px;
  position:absolute;
}

.logo_bcn
{
width:150px;
}

.nav__link {
  margin-left: 20px;
  color:#5a5a5a;
  text-decoration:none;
}
.nav__link:hover {
  margin-left: 20px;
  color:#0000ff;
  text-decoration:none;
}

.getting-started:hover {
  color:#fff;
  text-decoration:none;
}

.main-nav
{
  
  margin-left:50px;
}
.app-nav
{
margin-left:auto;
}

.getting-started
{
  box-sizing:border-box;
  background-color:#0000ff;
  border-radius:50px;
  min-height: 52px;
  padding-top:20px;
  padding-bottom:20px;
  padding-right: 30px;
  padding-left: 30px;
  color:#fff;
  transition:all ease-in .2s;
  border:#0000ff solid 1.5px;
}
.getting-started:hover
{
  
  border:#0000ff solid 1.5px;
  background-color:#fff;
  color:#0000ff;
  transition:all ease-in .2s;
}



</style>
