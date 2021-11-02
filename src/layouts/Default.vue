<template>
  <div class="layout">
    <header class="header">
      <div class="menu">
        <span class="menu-circle"></span>
        <a  v-on:click="openingMenu" href="#" class="menu-link">
          <span class="menu-icon">
            <span class="menu-line menu-line-1"></span>
            <span class="menu-line menu-line-2"></span>
            <span class="menu-line menu-line-3"></span>
          </span>
        </a>
      </div>
      
      <div :class="{open: activeClass}" class="menu-overlay">
        <h1 class="overlay-info">
          YOU CAN ADD YOUR MENU HERE. <br>
          I USED THIS GIF INSTEAD.
        </h1>
      </div>
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
  },
       data: function ()
       {
         return{
        activeClass: false
         }
      },
      methods:
          {
            openingMenu: function () {
              this.activeClass = !this.activeClass;
              console.log(this.activeClass);
              console.log("menu-active");
            }
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
  width:100%;
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


/* ---------------------------------------------------- MENU ----------------------------------------------------------------- */
.menu {
  position: absolute;
  top: 20px;
  left: 20px;
  height: 46px;
  width: 46px;
}

.menu-link {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1002;
}

.menu-icon {
  position: absolute;
  width: 20px;
  height: 14px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 1px;
}

/* ------------- */
.menu-line {
  background-color: #fff;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s ease-in-out;
}
.menu-line-2 {
  top: 0;
  bottom: 0;
  margin: auto;
}
.menu-line-3 {
  bottom: 0;
}
.menu.open .menu-line-1 {
  transform: translateY(7px) translateY(-50%) rotate(-45deg);
}
.menu.open .menu-line-2 {
  opacity: 0;
}
.menu.open .menu-line-3 {
  transform: translateY(-7px) translateY(50%) rotate(45deg);
}

/* ------------- */
.menu-circle {
  background-color: #0000ff;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  transform: scale(1);
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}
.menu:hover .menu-circle {
  transform: scale(1.5);
}
.menu.open .menu-circle {
  transform: scale(60);
}

/* ------------- */
.menu-overlay {
  background-color: #0000ff;
  color: #fff;
  height: 100%;
  width: 100%;
  position: fixed;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top:0;
  left:0;
  overflow:hidden;
}
.menu-overlay.open {
  opacity: 1;
  visibility: visible;
}

/* ------------- */
.info {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.overlay-info {
  text-align: center;
  color: #fff;
}


@media (max-width:768px)
{
.nav
{
display:none;
}
.logo_bcn
{
width:150px;
position:relative;
top:10px;
left:40px;
}
}

</style>
