<template>
 <div class="wrapper-all">
      

     <div class="layout-footer">
  <div class="column">
      <ul>
          <h3>More</h3>
          <li>About</li>
          <li>Contact us</li>
          <li>Get updates</li>
      </ul>
      </div>

  <div class="column">
      <ul>
          <h3>The Project</h3>
          <li>Whitepaper</li>
          <li>Pitch deck</li>
      </ul>
  </div>

  <div class="column">
      <ul>
          <h3>Website Policy</h3>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
      </ul>
  </div>
  </div>
  
                  <div class="section-number-container">
<div>Copyright 2021 Riflebird ltd</div>
<div class="number-bar"></div>
    </div>
  
  </div>
</template>
<script>
</script>


<style scoped>
.wrapper-all
{
    background-color:#0f0f0f;
    display:flex;
    flex-direction:column;
    padding:30px 60px;
    min-height:300px;
    border-top:1px solid #fff;
}
.layout-footer
{
    
    width:100%;
    background-color:#0f0f0f;
    color:#fff;
    display:flex;
    padding:0px 0px;
}
.column
{
    margin-right:100px;
}
.column li
{
    list-style:none;
    line-height:2;
}
.column h3
{
    background-color:white;
    color:#0f0f0f;
}
.section-number-container
{
    display:flex;
    color:#fff;
    flex-direction:row;
    align-items:center;
    margin-left:40px;
    margin-top:40px;
    
}
.number-bar
{
    width:100px;
    height:1px;
    background-color:#fff;
    margin-left:10px;
}
@media (max-width:768px)
{
 .wrapper-all
{
    background-color:#0f0f0f;
    display:flex;
    flex-direction:column;
    padding:30px 60px;
    min-height:300px;
    border-top:1px solid #fff;
    width:100%;
    overflow:hidden;
}   
}
</style>