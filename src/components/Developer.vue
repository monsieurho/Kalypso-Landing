<template>
<div class="developer-wrapper">
    <div class="terminal-headline">
          <div class="section-number-container">
<div>01</div>
<div class="number-bar"></div><div>Network Users</div>
    </div>
      
      <h2>Made with developers in mind</h2>
    <p>Kalypso provides the most advanced rotating residential proxy service offering a fast and large real-peer IP network.</p></div>
    <div class="terminal-container">
    <div class=fakeMenu>
  <div class="fakeButtons fakeClose"></div>
  <div class="fakeButtons fakeMinimize"></div>
  <div class="fakeButtons fakeZoom"></div>
</div>
<div class="fakeScreen">
  <p>curl --proxy zproxy.kaly-superproxy.io:22225 --proxy-user kaly-customer-CUSTOMER-zone-mobile
-country-hk
-city-hong-kong
-os-win
    :PASSWORD "http://kalypso.network/ip-testing.json"<span class="blink">_</span></p>
</div>
    </div>
</div>

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


.developer-wrapper
{
  background-color:#0f0f0f;
  padding: 10px;
  padding-top:100px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  }

.terminal-headline
{
    width:30%;
}

  .terminal-headline h2
  {
color:#fff;

line-height:1;
margin-bottom: 20px;
font-weight:400;
font-size:45px;
  }
  .terminal-headline p
  {
      color:#fff;
      margin-top:0px;
  }

.terminal-container
{
        margin: 20px;
}

.fakeButtons {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  border: 1px solid #000;
  position: relative;
  top: 6px;
  left: 6px;
  background-color: #ff3b47;
  border-color: #9d252b;
  display: inline-block;
}

.fakeMinimize {
  left: 11px;
  background-color: #ffc100;
  border-color: #9d802c;
}

.fakeZoom {
  left: 16px;
  background-color: #00d742;
  border-color: #049931;
}

.fakeMenu {
    max-width: 600px;
  box-sizing: border-box;
  height: 25px;
  background-color: #bbb;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}

.fakeScreen {
  background-color: #151515;
  box-sizing: border-box;
  max-width: 600px;
  min-height:300px;
  padding:20px;
    border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

p {
  text-align: left;
  font-size: 1.25em;
  font-family: monospace;
  color:#fff;
}

.blink
{
  color:#fff;
  animation: blink infinite 1s;
}

@keyframes blink
{
  0% {opacity:1}
  49% {opacity:1}
  50% {opacity:0}
  100% {opacity:0}
}
@media (max-width:768px)
{
  .section-number-container
{
    display:none;
}
.terminal-headline
{
    width:100%;
    order:1;
    padding:20px;
}
  .terminal-headline h2
  {
color:#fff;

line-height:1;
margin-bottom: 20px;
font-weight:400;
font-size:35px;
  }
}
</style>