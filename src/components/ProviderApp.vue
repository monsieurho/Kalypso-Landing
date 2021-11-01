<template>
<div style="overflow:hidden;">

    <div  class="provider-app-wrapper scene" v-on:mousemove="updateCoordinates">
                            <div id="appb"  class="magic" :style="{left: x+'px', top: y+'px'}"></div>
        <div class="provider-app-container"> 

                            <div class="provider-app-image">
                    <img src="../assets/provider-app-preview.png" :style="{marginLeft: xImage+'px', marginTop: yImage+'px'}">
                    </div>
            <div class="provider-app-headline">
                          <div class="section-number-container">
<div>00</div>
<div class="number-bar"></div><div>Network Providers</div>
    </div>
                <h2>Easily connect to the network and start earning KALY tokens</h2>
                <p>Kalypso can be installed on any Windows, Linux, MacOS, or Android device with a stable Internet connection. Once active, Kalypso securely shares your Internet connection, never gaining access to your personal data.</p>
                </div>

            </div>

        </div>

</div>
</template>

<script>

</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8  */ {
  opacity: 0;
}

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



.provider-app-wrapper
{
background-color:#0f0f0f;
color:white; 
padding:100px 0px;
padding-top:0px;
display:flex;
justify-content:center;
align-items:center;
min-height:70vh;
margin-bottom:0px;
overflow:hidden;


}
.provider-app-container
{
display:flex;
justify-content:center;
align-items:center;
flex-direction:row;
text-align:center;
max-width:1200px;
position:relative;
}
.provider-app-container > div
{
width:50%;
}
.provider-app-headline
{
    position:relative;
        z-index:15;

}

.provider-app-headline h2
{
    font-size:45px;
    font-weight:400;
    line-height:1;
    text-align:left;
}
.provider-app-headline p
{
    text-align:left;
}
.provider-app-image{
    max-width:800px;
    margin:0%;
    position:relative;
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:15;
}

.provider-app-image img
{
    width:120%;
    position:absolute;
    
}

.magic {
  position: absolute;
  top: calc(50% - 10rem);
  left: calc(50% - 10rem);
  width: 20rem;
  height: 20rem;
  background: center center no-repeat fixed;
  background-size: cover;
  border-radius: 50%;
  z-index: 2;
  background-image:url('../assets/hover-reveal.png');
opacity:0.3;
}

.scene {
  height: 100vh;
  width: 100%;
  text-align: center;
  overflow: hidden;
  z-index: 1;
}
</style>