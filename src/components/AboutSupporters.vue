<template>
<div class="about-supporters-wrapper">
    <div class="about-supporters-container">
<div><a href="https://www.mantradao.com/" target="_blank"><img src="../assets/companies-logos/mantra-dao.svg"></a></div>
<div><a href="https://www.unknownvc.com/" target="_blank"><img src="../assets/companies-logos/unknown-vc.png"></a></div>
<div><a ><img src="../assets/companies-logos/quantum-flow.png"></a></div>

  
  </div></div>
</template>

<script>





</script>

<style scoped>
.about-supporters-wrapper
{
    display:flex;
    flex-wrap:wrap; 
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:#0f0f0f;
    min-height:200px;
    overflow-x: hidden;
}
.about-supporters-container
{
    max-width:1000px;
    display:flex;
    padding-bottom:30px;
}
.about-supporters-container
{
    max-width:1000px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:1px #eee solid; 
}
.about-supporters-container > div
{
width:15%;
margin-right:50px;
margin-left:50px;
}
.about-supporters-container > div img
{
width:100%;
}

@media (max-width:768px)
{
.about-supporters-wrapper
{

    flex-direction:column;

}
.about-supporters-container
{
    flex-direction:column;
    padding-top:80px;
    padding-bottom:40px;
}
.about-supporters-container > div
{
width:40%;
margin-right:50px;
margin-left:50px;
padding-bottom:40px;
}
}
</style>