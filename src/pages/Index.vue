<template>
  <div v-on:mousemove="updateGlobeCoordinates">
    <div   class="bcn_overall">
<div class="bcn_hero_container">
<!-- headline starts -->
  <div class="bcn_meta_highlight">
    <svg enable-background="new 0 0 330 330" viewBox="0 0 330 330" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m165 330c63.411 0 115-51.589 115-115 0-29.771-11.373-56.936-30-77.379v-52.621c0-46.869-38.131-85-85-85s-84.999 38.131-84.999 85v52.619c-18.628 20.445-30.001 47.61-30.001 77.381 0 63.411 51.589 115 115 115zm15-110.014v20.014c0 8.284-6.716 15-15 15s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986 0-13.785 11.215-25 25-25s25 11.215 25 25c0 8.162-3.932 15.421-10 19.986zm-69.999-134.986c0-30.327 24.673-55 54.999-55 30.327 0 55 24.673 55 55v29.029c-16.348-8.941-35.09-14.029-55-14.029-19.909 0-38.651 5.088-54.999 14.028z" />
    </svg>
    Your Privacy Companion
    <svg width="12px"  viewBox="0 0 16 12" style="margin-left:20px;">
      <path d="M0 7h12.17l-3.28 3.28 1.41 1.41L16 6 10.3.31 8.89 1.72 12.17 5H0v2z"></path>
    </svg>
  </div>
  <h1 class="bcn_title">Decentralized Bandwidth Marketplace</h1>
    <div class="bcn_paragraph">
      Leverage Kalypso’s P2P Proxy, VPN, and CDN bandwidth marketplace to maximize your browsing capabilities. Put your devices to work and earn passive income through the click of a button. <span class="bcn_plink"><a href="#try-the-demo"> Try the demo</a></span>
  </div>
          <div id="prepare">
            <!-- Begin Mailchimp Signup Form -->
            <div id="mc_embed_signup">
              <form action="https://network.us5.list-manage.com/subscribe/post?u=ff03658be1ba40ba4737fad13&amp;id=0ca8efef0c"
                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank"
                novalidate>
                <div id="mc_embed_signup_scroll">
            
                  <div class="mc-field-group">                   
                    <input type="email" value="" name="EMAIL" class="input-email-form required email" id="mce-EMAIL" placeholder="Email address"> 
                  </div>
                  <div id="mce-responses" class="clear foot">
                    <div class="response" id="mce-error-response" style="display:none"></div>
                    <div class="response" id="mce-success-response" style="display:none"></div>
                  </div>
                  <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text"
                      name="b_ff03658be1ba40ba4737fad13_0ca8efef0c" tabindex="-1" value="" ></div>
                  <div class="optionalParent">
                    <div class="clear foot">
                      <input type="submit" value="Subscribe"  name="subscribe" id="mc-embedded-subscribe" class="btn btn-primary">
                    </div>
                  </div>
                </div>
              </form>
            </div>
            
            <!--End mc_embed_signup-->
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
    display:flex;
    justify-content:flex-start;
    margin-bottom:15px;
}
.bcn_meta_highlight svg
{
  color:#0000ff;
fill:#0000ff;
width:20px;
margin-right:5px;
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

#prepare
{
  margin-top:40px;
}

#mc_embed_signup_scroll
{
  display:flex;
justify-content:flex-start;
align-items:center
}
.input-email-form
{
  padding:20px;
  margin-right:10px;
}
.input-email-form::placeholder
{
      font-family:"SF Mono", "Fira Code","Fira Mono","Roboto Mono",monospace;

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
    font-size: 62px;
}

.btn
{
  color: #0000ff !important;
    background-color: transparent !important;
    border: 1px solid #0000ff !important;
    border-radius: 4px;
    padding: 20px;
    font-size: 18px !important;
    font-family:"SF Mono", "Fira Code","Fira Mono","Roboto Mono",monospace;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
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
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  padding-top:100px;
  position:relative;
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
  width:800px;
  height:800px;
  perspective: 1000px;
  z-index:1;
position:absolute;
left:0px;
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

@media (max-width:768px)
{
  .bcn_overall
{
  max-width:100%;
  flex-direction:column;
    min-height:100vh;
    overflow-x:hidden;
    position:relative;
    justify-content:flex-end;
    align-items:flex-end;
}
.bcn_hero_container
{
  max-width:100%;
  position:relative;
  z-index:999;
  right:0px;
  padding-bottom:100px;
  order:2;

}
.bcn_title
{

    font-size: 38px;
          padding: 0px 20px;

}
.bcn_paragraph
{
      padding: 0px 20px;
    max-width: 100%;
      color: #888888;
    font-size: 14px;
    line-height: 1.3;
}

.animation-space
{
  width:100%;
  align-self:flex-start;
  display:flex;
  justify-content:center;
  align-items:center;
  order:1;
    max-height:310px;
}
.scene-anim {
  width:90vw;
  height:90vw;
  perspective: 1000px;
  z-index:1;
position:absolute;
margin-left:auto;
top:0px;
}
.bcn_meta_highlight
{
display:none;
}

#prepare
{
  margin-top:20px;
}

#mc_embed_signup_scroll
{

padding-left:20px;
}

}

</style>
