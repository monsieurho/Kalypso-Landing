<template>
<div class="reward-wrapper">
<div class="reward-container">
<div class="reward-title">
    <!-- <img style="position:absolute;width:150px;transform:rotate(70deg);;left:17%;padding-top:100px" src="../assets/token.gif"> -->
Get rewards<br>for sharing<br> your network
</div>
<div class="reward-subtitle">
Start earning with Kalypso, and use the money to pay for a streaming platform subscription, unlock exclusive content
on free-to-play video games, or simply treat yourself with a little online shopping spree.
</div>
<div class="reward-four-points">

    <div class="point1">
    <h3>
        Earn without compromising security
    </h3>
    <div>
        Kalypso ensures that your internet traffic is only used by trusted partners, and the app never asks for or gains access to the storage of your device.
    </div>
    </div>
      <div class="point2">
    <h3>
    Know exactly what your Internet is used for
    </h3>
    <div>
        Once you start using Kalypso, your devices act like view towers and help world-famous businesses access the World Wide
        Web without having to worry about location-based restrictions or censorship.
    </div>
    </div>
      <div class="point3">
    <h3>
       Get rewarded in KALY Tokens and USDC
    </h3>
    <div>
        Stake your tokens and earn rewards USDC and KALY. It’s the risk-free, collateral-free way to earn crypto passive income.
    </div>
    </div>
      <div class="point4">
    <h3>
        Transparent earnings
    </h3>
    <div>
        Your earnings directly depend on the amount of traffic you share with Honeygain’s network. The more you share, the more
        you earn!
    </div>
    </div>
    </div>
</div>
</div>
</template>

<script>
</script>
<style scoped>
.reward-wrapper
{
background-color:#0f0f0f;
color:white; 
padding:100px 0px;
display:flex;
justify-content:center;
align-items:center;
min-height:70vh;
}
.reward-container
{
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
text-align:center;
}
.reward-title
{
 font-size: 80px;
    line-height: 1; 
    max-width:800px;   
}
.reward-title:after
{
    content:' ';
    white-space: pre;
    position:absolute;
    width:10px;
    height:80px;
    background-color:#fff;
    animation:typing 1.2s infinite;

}
@keyframes typing {
  0% {opacity:0}
  50% {opacity:0}
  51%{opacity:1}
  100% {opacity:1}
}
.reward-subtitle
{
    font-size:12px;
    max-width:500px;
}
.reward-four-points
{
display:flex;
flex-direction:row;
max-width:800px;
text-align:left;
margin-top:30px;
}

.reward-four-points h3
{
font-size:15px;
}
.reward-four-points > div
{
padding:10px;
width:25%;
}
.reward-four-points > div > div
{
font-size:12px;
}
</style>