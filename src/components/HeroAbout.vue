<template>
<div class="hero-about-wrapper">
<figure>
  <video class="svg-clipped-text" autoplay preload="metadata" buffered loop muted>
 

      <source src="http://lanecrawford-events.com/wp-content/uploads/2021/06/video-zoom.mp4"
              type="video/mp4">
              

      Sorry, your browser doesn't support embedded videos.
  </video>
  <svg width="0" height="0">
	<clipPath id="svgTextPath" clipPathUnits="objectBoundingBox">
		<path d="M0.75815095,0.0579477769 C0.879893708,0.187288937 0.902165272,0.677587654 0.799370955,0.785996249 C0.627963035,0.966765889 0.26163708,0.91434951 0.111342491,0.755791573 C-0.0332137967,0.603287436 -0.035795248,0.382887577 0.0965066612,0.173955315 C0.200239457,0.0101396315 0.648923894,-0.0580965318 0.75815095,0.0579477769 Z"></path>
	</clipPath>
</svg>
  <figcaption>Watch AMA</figcaption>
</figure>
<div class="hero-about-headline">
    <h1>Start using the Riflebird network</h1>
    <h3>Get direct access to residential proxies, personal VPN and lighting fast Content Delivery Network from Riflebird users worldwide.
</h3>
</div>
</div>
</template>

<script>

</script>
<style scoped>

.hero-about-wrapper
{
    display:flex;
    justify-content:center;
    align-items:center;
    max-width:1200px;
    margin:auto;
    min-height:90vh;
}
.hero-about-wrapper > div
{
width:50%;
}
.hero-about-headline h1
{
    font-size: 50px;
    line-height: 69px;
    font-weight:normal;
margin-bottom:0px;
}
.hero-about-headline h3
{
    font-size: 22px;
    line-height: 34px;
    color: rgb(106, 106, 106);
    font-weight:normal;
}
figure{
  width: 50%;
  height: 400px;
  position: relative;
  background-color: #fff; 
  overflow: hidden;
}
video{
  object-fit: cover;
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
}

figcaption{
  position: absolute;
  text-align: center;
  font-size: 1.2em;
  font-weight: normal;
  text-transform: uppercase;
  z-index: 2;
  width:200px;
  color:#000;
  border:solid 1px #fff;
  display:inline-block;
  background-color:white;
  padding:20px 30px;
left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
top:38%;

}
.svg-clipped-text {
    -webkit-clip-path: url(#svgTextPath);
    clip-path: url(#svgTextPath);
}
 
</style>
