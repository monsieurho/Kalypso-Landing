<template>
    <div>
      <div class="vpn-hero-wrapper">
          <div class="vpn-hero-container">
              <div class="hero-about-image">
<img src="../assets/vpn.gif">
</div>
              <div class="hero-headline">
                  <div class="highlight">AN INTRODUCTION</div>
<h1>VPN</h1>
<h5>Decentralized Global Network</h5>
<p>The world’s first VPN on Solana running exclusively on the blockchain. Kalypso VPN is cheaper than any other services and stable. It delivers your content faster and more cost effectively than traditional VPNs can.</p>
   
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
    color:blue;
    font-size:12px;
    line-height:0px;
    margin-bottom:0px;
}
.vpn-hero-container
{
    max-width:100%;
    min-height:90vh;
    display: flex;
    align-items:center;
  justify-content: center;
  flex-direction:row;
}
.hero-headline
{
    width:50%;
    position:relative;

    padding-top:0px;

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
    font-weight:400;
}

.hero-about-image {
  display: flex;
  width:40%;
  justify-content: center;
  align-items: center;
  flex-direction:row;
}
.hero-about-image img {
  width:90%;

}
@media (max-width:768px)
{
  .vpn-hero-container
{
  flex-direction:column;
}
.hero-about-image {

  width:100%;
  padding-top:100px;

}
.hero-about-image img {
  width:100%;

}
.hero-headline
{
    width:100%;
    position:relative;
padding-left:20px;
padding-right:20px;
    padding-top:0px;

}
}
</style>