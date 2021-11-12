<template>
<div class="uses-cases-wrapper">

<div class="headline-use-cases"><h2>How you can use Kalypso proxies</h2></div>

<div class="actual-use-cases">
<div>
  <img src="../assets/icons/research.svg">
<p>Market research</p>
</div>
<div>
  <img src="../assets/icons/sneakers.svg">
<p>Sales intelligence</p>
</div>
<div>
  <img src="../assets/icons/social-media.svg">
<p>Social Media Services</p>
</div>
<div>
  <img src="../assets/icons/copyright.svg">
<p>Brand protection</p>
</div>
<div>
  <img src="../assets/icons/world.svg">
<p>Travel fare aggregation</p>
</div>
<div>
  <img src="../assets/icons/tear-off-ads.svg">
<p>Ad verification</p>
</div>
<div>
  <img src="../assets/icons/seo.svg">
<p>SEO monitoring</p>
</div>
<div>
  <img src="../assets/icons/stock.svg">
<p>Price Monitoring</p>
</div>
<div>
  <img src="../assets/icons/email.svg">
<p>Email protection</p>
</div>
<div>
  <img src="../assets/icons/cyber.svg">
<p>Cybersecurity</p>
</div>


</div>
<div>
  <a class="demo-market" href="mailto:hello@kalypso.network">Contact Us</a>
</div>

  </div>
</template>

<script>

</script>

<style scoped>
.uses-cases-wrapper
{
  display:flex;
  flex-direction:column; 
  justify-content:center;
  align-items:center;
  background-color:#0f0f0f;
  color:white;
  padding-bottom:100px;
}
.actual-use-cases
{
display:flex;
flex-wrap:wrap;
max-width:1000px;
  padding-bottom:80px;

}
.actual-use-cases > div
{
width:150px;
text-align:center;
margin:20px 20px;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
}
.actual-use-cases > div > img
{
width:60px;
}
.headline-use-cases
{
text-align:center;
}
.headline-use-cases h2
{
font-weight:400;
font-size:45px;
max-width:600px;
}


.demo-market
{
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
  text-decoration:none;
  margin-bottom:100px;
  margin-top:100px;
}
.demo-market:hover {
  color:#fff;
  text-decoration:none;
}

@media (max-width:768px)
{
  .headline-use-cases h2
{
font-weight:400;
font-size:35px;
max-width:600px;
}
}

</style>