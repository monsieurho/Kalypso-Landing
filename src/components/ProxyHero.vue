<template>
    <div>
<div class='wave-container'>
    
  <div class="headline"><div class="highlight">FORWARD PROXY</div>Gather Data at Scale With Market-Leading Proxy Solutions</div>
  <div class='wave'></div>
  <div class='wave wave2'></div>
  <div class='wave wave3'></div>
  <div class='wave wave4'></div>
</div>
    </div>
</template>
 
<script>
</script>
<style scoped>
.highlight
{
    color:blue;
    font-size:14px;
    line-height:3;
    margin-bottom:0px;
}
.wave-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  background: #fff;
}
.wave-container .headline {
  position: absolute;
  top: 40%;
  left: 50%;
  margin: 0;
  z-index: 9000;
  font-size: 3rem;
  transform: translate(-50%,-50%);
  line-height:1.3;
  text-align:center;
}
.wave {
  opacity: .8;
  position: absolute;
  top: 75%;
  left: 50%;
  width: 5000px;
  height: 5000px;
  background: #fff;
  border:solid 2px blue;
  margin-left: -2500px;
  transform-origin: 50% 48%;
  border-radius: 46%;
  animation: wave 12s infinite linear;
  pointer-events: none;
}
.wave2 {
  animation: wave 28s infinite linear;
  opacity: .4;
}
.wave3 {
  animation: wave 20s infinite linear;
  opacity: .1;
}
.wave4 {
  animation: wave 25s infinite linear;
  opacity: .1;
}
@keyframes wave {
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
</style>