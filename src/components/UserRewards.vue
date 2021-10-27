<template>
<div class="reward-wrapper">
<div class="reward-container">
<div class="reward-title">
    <img style="position:absolute;width:150px;transform:rotate(70deg);;left:17%;padding-top:100px" src="../assets/token.gif">
Get rewards<img style="position:absolute;width:150px;transform:rotate(30deg);padding-bottom:00px" src="../assets/token.gif"> <br>for sharing<br> your network
</div>
<div class="reward-subtitle">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
</div>
<div class="reward-four-points">
        <img style="position:absolute;width:150px;transform:rotate(190deg);;left:14%;padding-top:100px" src="../assets/token.gif">

    <div class="point1">
    <h3>
        Lorem Ipsum Dolare
    </h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    </div>
      <div class="point2">
    <h3>
        Lorem Ipsum Dolare
    </h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    </div>
      <div class="point3">
    <h3>
        Lorem Ipsum Dolare
    </h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </div>
    </div>
      <div class="point4">
    <h3>
        Lorem Ipsum Dolare
    </h3>
    <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
}
.reward-four-points > div > div
{
font-size:12px;
}
</style>