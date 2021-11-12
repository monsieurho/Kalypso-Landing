<template>
    <div>
      <div class="cdn-hero-wrapper">
          <div class="cdn-hero-container">
              <div class="hero-about-image">
<div class="box"></div>
</div>
              <div class="hero-headline">
                  <div class="highlight">AN INTRODUCTION</div>
<h1>Content Delivery Network</h1>
<h5>A fast, agile, and secure global network</h5>
<p>Kalypso offers ultra-fast static and dynamic content delivery over our global decentralized network. 
    Exercise precise control over how your content is cached, reduce bandwidth costs, and take advantage of built-in unmetered DDoS protection.</p>
   
    </div>
</div>
      </div>
    </div>
</template>
 
<script>
</script>
<style scoped>
.highlight
{
    color:#0000ff;
    font-size:12px;
    line-height:0px;
    margin-bottom:0px;
}
.cdn-hero-container
{
    max-width:100%;
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:row;
    background-image: radial-gradient(closest-side, rgba(255, 255, 255, 0.94), rgba(255, 255, 255, 0.94), white), url("../assets/grid.svg");
  background-repeat: no-repeat, repeat;
  background-size: auto, 75px 44px;
}
.hero-headline
{
    width:50%;
    position:relative;

    padding-top:0px;
    top:-70px;
    left:-40px;
}
.hero-headline > p
{
    max-width:600px;
}
.hero-headline > h1
{
    font-size:50px;
    max-width:600px;
    line-height:1;
    padding-top:0px;
    margin-top:20px;
}

.hero-about-image {
  display: flex;
  width:40%;
  justify-content: center;
  align-items: center;
  flex-direction:row;
  min-height: 100vh;

}

@-webkit-keyframes transform {
  0% {
    transform: translate(-10px, -10px);
  }
  100% {
    transform: translate(-100px, -100px);
  }
}

@keyframes transform {
  0% {
    transform: translate(-10px, -10px);
  }
  100% {
    transform: translate(-100px, -100px);
  }
}
@-webkit-keyframes opacity {
  0% {
    opacity: 0.4;
    filter: blur(10px);
  }
  100% {
    opacity: 0.2;
    filter: blur(20px);
  }
}
@keyframes opacity {
  0% {
    opacity: 0.4;
    filter: blur(10px);
  }
  100% {
    opacity: 0.2;
    filter: blur(20px);
  }
}
.box {
  width: 140px;
  height: 140px;
  transform: rotateX(55deg) rotateZ(45deg);
}
.box::before, .box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.box::before {
  background: black;
  -webkit-animation: opacity 4s ease;
          animation: opacity 4s ease;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
}
.box::after {
  background: #0000FF;
  -webkit-animation: transform 4s ease;
          animation: transform 4s ease;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
  box-shadow: 1px 1px 0 #1978fc, 2px 2px 0 #1978fc, 3px 3px 0 #1978fc, 4px 4px 0 #1978fc, 5px 5px 0 #1978fc;
}

@media (max-width:768px)
{
 .cdn-hero-container
{
    max-width:100%;
  flex-direction:column;

} 
.hero-about-image {
  width:100%;
  min-height:0px;
  padding-top:200px;
}
.hero-headline
{
    width:100%;
    position:relative;
padding:0px 20px;
    padding-top:0px;
    top:0px;
    left:0px;
    padding-bottom:50px;
}
.hero-headline > h1
{
    font-size:40px;


}
}
</style>