<template>
  <div v-on:mousemove="updateGlobeCoordinates">
    <div   class="bcn_overall">
<div class="bcn_hero_container">
<!-- headline starts -->
  <div class="bcn_meta_highlight">TestYOUR PRIVACY COMPANION</div>
  <h1 class="bcn_title">Decentralized Bandwidth Marketplace On Worldwide Devices</h1>
    <div class="bcn_paragraph">
      Use the Fastest Residential Proxy Network, bypass country restrictions and website blocks. Forget about the limit of actions made from one IP. <span class="bcn_plink"><a href="#try-the-demo">Try the demo</a></span>
  </div>
          <div id="prepare">
            <button class="btn btn-primary" id="btn-connect">
              GET  UPDATES
            </button>
          </div>
      </div>

<!-- headline ends -->

<!-- animation starts -->
<div class="animation-space">
  <div class="scene-anim" >
  <div class="wrapper-anim" :style="{marginLeft: xGlobe+'px', marginTop: yGlobe+'px'}">
    <ul class="ball-anim">
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
      <li class="ring-anim"></li>
    </ul>
  </div>
</div>
</div>
<!-- animation ends -->

    </div>

    
    
 

 <UserRewards />
  <ProviderApp />
    <Developer />
   <SelfServiceDashboard />
  <Roadmap />
  </div>

</template>

<script>
import Roadmap from '~/components/Roadmap.vue'
import SelfServiceDashboard from '~/components/SelfServiceDashboard.vue'
import UserRewards from '~/components/UserRewards.vue'
import ProviderApp from '~/components/ProviderApp.vue'
import Developer from '~/components/Developer.vue'

 
export default {
  components: {
    Roadmap,
    SelfServiceDashboard,
    UserRewards,
    ProviderApp,
    Developer
  },
  data: function() {
            return {
    xGlobe: 0,
    yGlobe: 0, 
  }},
  methods: {
           updateGlobeCoordinates: function(event) {
      // pass event object, bound to mouse move with update
      this.xGlobe = event.screenX / 50;        
      this.yGlobe = event.screenY / 50;


    }
             }
  }
  

</script>


<style>

.home-links a {
  margin-right: 1rem;
}

.bcn_overall
{
  max-width:1500px;
  margin-left:auto;
  margin-right:auto;
  display:flex;
  justify-content:center;
  align-items:center;
    min-height:100vh;
}

.bcn_hero_container
{
  display:flex;
  justify-content:flex-start;
  align-items:flex-start;
  flex-direction:column;
  text-align:left;
  max-width:600px;
  position:relative;
  z-index:999;
  right:-100px;
}

.bcn_meta_highlight
{
  color:#0000ff;
  text-align:left;
  font-family:"SF Mono", "Fira Code","Fira Mono","Roboto Mono",monospace;
    font-size:16px;
    font-weight: 400;
}
.bcn_paragraph
{
      margin: 20px 0px 0px;
    max-width: 550px;
      color: #888888;
    font-family:"SF Mono", "Fira Code","Fira Mono","Roboto Mono",monospace;
    font-size: 20px;
    line-height: 1.3;
}

.bcn_plink a
{
  color:#0000ff;
  text-decoration:underline;
  text-decoration-style: dotted;
}
.bcn_plink a:hover
{
  cursor:pointer;
}

.bcn_title
{
  font-weight: 400;
  font-family:-apple-system,system-ui,sans-serif;
    color: #000;
    line-height: 1;
  margin: 0px;
    font-size: 73px;
}

.btn
{
  color: #0000ff !important;
    background-color: transparent !important;
    border: 1px solid #0000ff !important;
    border-radius: 4px;
    padding: 1.25rem 1.75rem !important;
    font-size: 18px !important;
    font-family:"SF Mono", "Fira Code","Fira Mono","Roboto Mono",monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    margin-top: 50px;
    transition:ease-in all 0.2s;
}

.btn:hover
{
    color: #fff !important;
    background-color: #0000ff !important;
  transition:ease-in all 0.2s;
}

#network
{
  margin-top:20px;
    color:#0000ff;
  text-align:left;
  font-family:"SF Mono", "Fira Code","Fira Mono","Roboto Mono",monospace;
    font-size:16px;
    font-weight: 400;
}
#network:before
{
  content:' ';
  height:10px;
  width:10px;
  border-radius:50%;
}

.animation-space
{
  width:50%;
  display:flex;
  justify-content:center;
  align-items:center;
}



/* animation starts */

@keyframes roundandround {
  to {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

@keyframes show {
  to {
    opacity: 1;
  }
}
.scene-anim {
  width:600px;
  height:600px;
  perspective: 1000px;
  z-index:1;
  position:absolute;
}
.wrapper-anim {
  width:100%;
  height:100%;
  transform: rotateX(45deg) rotateY(45deg);
  transform-style: preserve-3d;
}
.ball-anim {
  position: relative;
  width: 70%;
  height: 70%;
  margin:0 auto;
  transform-style:  preserve-3d;
  animation: roundandround 17.5s 1.3s infinite linear;
}
.ball-anim .ring-anim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border:6px;
  border-style: dashed;
  border-radius: 50%;
  opacity: 0;
  animation: show 0.75s forwards ease-in-out;
}
.ring-anim:nth-child(1) {
  color:#0000ff;
  transform: rotateY(4deg);
  animation-delay: 0s;
}
.ring-anim:nth-child(2) {
  color:#0000ff;
  transform: rotateY(8deg);
  animation-delay: 0.1s;
}
.ring-anim:nth-child(3) {
  color:#0000ff;
  transform: rotateY(12deg);
  animation-delay: 0.2s;
}
.ring-anim:nth-child(4) {
  color:#0000ff;
  transform: rotateY(16deg);
  animation-delay: 0.3s;
}
.ring-anim:nth-child(5) {
  color:#0000ff;
  transform: rotateY(20deg);
  animation-delay: 0.4s;
}
.ring-anim:nth-child(6) {
  color:#0000ff;
  transform: rotateY(24deg);
  animation-delay: 0.5s;
}
.ring-anim:nth-child(7) {
  color:#0000ff;
  transform: rotateY(28deg);
  animation-delay: 0.6s;
}
.ring-anim:nth-child(8) {
  color:#0000ff;
  transform: rotateY(32deg);
  animation-delay: 0.7s;
}
.ring-anim:nth-child(9) {
  color:#0000ff;
  transform: rotateY(36deg);
  animation-delay: 0.8s;
}
.ring-anim:nth-child(10) {
  color:#0000ff;
  transform: rotateY(40deg);
  animation-delay: 0.9s;
}
.ring-anim:nth-child(11) {
  color:#0000ff;
  transform: rotateY(44deg);
  animation-delay: 1s;
}
.ring-anim:nth-child(12) {
  color:#0000ff;
  transform: rotateY(48deg);
  animation-delay: 1.1s;
}
.ring-anim:nth-child(13) {
  color:#0000ff;
  transform: rotateY(52deg);
  animation-delay: 1s;
}
.ring-anim:nth-child(14) {
  color:#0000ff;
  transform: rotateY(56deg);
  animation-delay: 0.9s;
}
.ring-anim:nth-child(15) {
  color:#0000ff;
  transform: rotateY(60deg);
  animation-delay: 0.8s;
}
.ring-anim:nth-child(16) {
  color:#0000ff;
  transform: rotateY(64deg);
  animation-delay: 0.7s;
}
.ring-anim:nth-child(17) {
  color:#0000ff;
  transform: rotateY(68deg);
  animation-delay: 0.6s;
}
.ring-anim:nth-child(18) {
  color:#0000ff;
  transform: rotateY(72deg);
  animation-delay: 0.5s;
}
.ring-anim:nth-child(19) {
  color:#0000ff;
  transform: rotateY(76deg);
  animation-delay: 0.4s;
}
.ring-anim:nth-child(20) {
  color:#0000ff;
  transform: rotateY(80deg);
  animation-delay: 0.3s;
}
.ring-anim:nth-child(21) {
  color:#0000ff;
  transform: rotateY(84deg);
  animation-delay: 0.2s;
}
.ring-anim:nth-child(22) {
  color:#0000ff;
  transform: rotateY(88deg);
  animation-delay: 0.1s;
}
.ring-anim:nth-child(23) {
  color:#0000ff;
  transform: rotateY(92deg);
  animation-delay: 0s;
}

/* animation ends */


</style>
