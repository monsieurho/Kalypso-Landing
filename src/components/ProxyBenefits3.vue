<template>
<div class="proxy-benefits3-wrapper">
    <div class="benefits3-container">
<div class="text-container-f">
    <div class="section-number-container">
<div>02</div>
<div class="number-bar"></div><div>Features</div>
    </div>
    <h2>Rotating<br> Proxy IPs</h2>
    <p>Rotating an IP refers to changing (rotating) the IP address and generating an entirely new session based on a certain time frame, number of requests or status code.</p>
    <p>If you are taking part in web data extraction including; verifying ads, testing website performance, collecting price comparison data or managing accounts you need rotating proxies.</p>
</div>
<div><div><div class="loader3">
  <span></span>
  <span style="background-color:#f6aa18;"></span>
  <span style="background-color:#9958c5;"></span>
</div></div></div>
  </div></div>
</template>

<script>

</script>

<style scoped>

.section-number-container
{
    display:flex;
    color:#fff;
    flex-direction:row;
    align-items:center;
}
.number-bar
{
    width:100px;
    height:1px;
    background-color:#fff;
    margin-left:10px;
    margin-right:10px;
}

.proxy-benefits3-wrapper
{
  display:flex;
  flex-direction:column; 
  justify-content:center;
  align-items:center;
  background-color:#0f0f0f;
  padding-bottom:200px;
    padding-top:100px;
    overflow-x:hidden;

}
.benefits3-container
{
    max-width:1000px;
    display:flex;
    justify-content:center;
    align-items:center;
}
.benefits3-container > div
{
width:50%;
color:#fff;
}
.benefits3-container > div > h2
{
font-weight:400;
font-size:45px;
margin-top:0px;
margin-bottom:0px;
color:#fff;
}
.benefits3-container img
{
width:80%;
}

.proxy-benefits-wrapper > div
{
    border-radius:50px;
    min-height:350px;
    width:25%;
    display:flex;
    flex-direction:column;
    margin:40px;
    align-items:center;
    text-align:center;
    padding:30px 40px;
}


/* animation */


.loader3 {
    width: 16em;
    height: 8em;
    position: relative;
    overflow: hidden;
    margin-left:100px;
}

.loader3::before,
.loader3::after {
    content: '';
    position: absolute;
    bottom: 0;
}

.loader3::before {
    width: inherit;
    height: 0.2em;
    background-color: #0000ff;
}

.loader3::after {
    box-sizing: border-box;
    width: 50%;
    height: inherit;
    border: 0.2em solid #0000ff;
    border-radius: 50%;
    left: 25%;
}

.loader3 span {
    position: absolute;
    width: 5%;
    height: 10%;
    background-color: #56dfbf;
    border-radius: 50%;
    bottom: 0.2em;
    left: -5%;
    animation: 2s linear infinite;
    transform-origin: 50% -3em;
    animation-name: run, rotating;
}

.loader3 span:nth-child(2) {animation-delay: 0.075s;}
.loader3 span:nth-child(3) {animation-delay: 0.15s;}

@keyframes run {
    0% {left: -5%;}
    10%, 60% {left: calc((100% - 5%) / 2);}
    70%, 100% {left: 100%;}
}

@keyframes rotating {
    0%, 10% {transform: rotate(0deg);}
    60%, 100% {transform: rotate(-1turn);}
}

@media (max-width:768px)
{
    .section-number-container
{
display:none
}
.proxy-benefits3-wrapper
{
  display:flex;
  flex-direction:column; 
  padding-bottom:0px;
    padding-top:100px;
    overflow-x:hidden;

}
.benefits3-container
{
flex-direction: column;
}
.benefits3-container > div
{
width:100%;
color:#fff;
padding:0px 20px;
}
.loader3 {
    order:1;
    margin-left:20px;
    margin-bottom:30px;
}
.text-container-f
{
order:2;
margin-bottom:50px;
}
}

</style>