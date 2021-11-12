<template>
<div class="cdn-overall">
    <div class="cdn-details-wrapper">
        <div class="highlights">FEATURES</div>
    <h2>Kalypso CDN</h2>
    <p>Fast and cost-efficient content delivery at the edge. A CDN that makes websites, APIs, eCommerce stores, mobile applications and SaaS platforms more performant and highly secure.</p>
    </div>

<div class="cdn-benefits">
<div class="cdn-benefits-icon"><img src="../assets/icons/buildings.svg"></div>
<div><h6>Hyper local</h6>
Kalypso CDN has hundreds of nodes in over 80 countries, getting your content closer to your audience than ever before.</div>
</div>

<div class="cdn-benefits">
<div class="cdn-benefits-icon"><img class="rotate-round" src="../assets/icons/loading.svg"></div>
<div><h6>Real Time Optimisation</h6>
Real time compression and resizing of assets at the point of request saves an average of 60% in filesize, speeding up delivery and reducing your overall costs.</div>
</div>

<div class="cdn-benefits">
<div class="cdn-benefits-icon"><img src="../assets/icons/money-bag.svg"></div>
<div><h6>Cost Effective</h6>
Kalypso CDN saves 20%+ on average vs. traditional CDNs as a result of better media compression and the use of edge devices instead of centralised data centres.</div>
</div>

<div class="cdn-benefits">
<div class="cdn-benefits-icon"><img src="../assets/icons/overload.svg"></div>
<div><h6>End to End TLS</h6>
Take workload off your origin by serving SSL certificates directly at the edge, accelerating performance and increasing availability.</div>
</div>


    </div>
</template>
 
<script>
</script>
<style scoped>
.cdn-overall
{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    background-color:#0f0f0f;
    min-height:70vh;
    padding-bottom:100px;

}


.cdn-details-wrapper
{
background-color:#0f0f0f;
padding:0px 0px;
padding-top:50px;
padding-bottom:70px;
display:flex;
align-items:center;
flex-direction:column;
color:#fff;
}
.highlights
{
    color:#0059ff;
    font-size:12px;
    margin:0px;
}
.cdn-details-wrapper h2
{
    font-size:3em;
    line-height:1;
    padding-bottom:0px;
     margin-bottom:0px;
     margin-top:30px;
}
.cdn-details-wrapper p
{
    text-align:center;
    max-width:600px;
    
}
.cdn-benefits
{
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    color:#fff;
  max-width:600px;
  margin-bottom:50px;

}
.cdn-benefits-icon
{
border-right:#fff dashed 1px;
padding-right:30px;
margin-right:30px;
}
.cdn-benefits-icon img
{
width:80px;
}
.cdn-benefits h6
{
    font-size:18px;
    margin-bottom:0px;
    margin-top:0px;
}

.rotate-round
{
    animation: rotation360 infinite 2000s;
    transform:rotate(0turn);
}

@keyframes rotation360
{
    0%{transform:rotate(360turn)}
    100%{transform:rotate(0turn)}
}
@media (max-width:768px)
{
    .cdn-overall
{

padding-left:20px;
padding-right:20px;
}
.cdn-benefits-icon img
{
width:60px;
}
.cdn-details-wrapper h2
{
    font-size:2em;
}
.cdn-details-wrapper p
{
font-size:14px;
   
}
.cdn-benefits
{
font-size:14px;

}
}
</style>