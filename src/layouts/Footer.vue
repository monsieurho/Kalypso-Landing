<template>
 <div class="wrapper-all">
      

     <div class="layout-footer">
  <div class="column">
      <ul>
          <h3>More</h3>
           <li><g-link class="footer-links" to="/about/">About</g-link></li>
          <li><a class="footer-links" href="mailto:hello@kalypso.network">Contact us</a></li>
          <li><a class="footer-links" href="https://network.us5.list-manage.com/subscribe/post?u=ff03658be1ba40ba4737fad13&id=0ca8efef0c">Get updates</a></li>
      </ul>
      </div>

  <div class="column" style="display:none">
      <ul>
          <h3>The Project</h3>
          <li>Whitepaper</li>
          <li>Pitch deck</li>
      </ul>
  </div>

  <div class="column">
      <ul>
          <h3>Website Policy</h3>
          <li><g-link class="footer-links" to="/terms/">Terms of use</g-link></li>
          <li><g-link class="footer-links" to="/privacy/">Privacy Policy</g-link></li>
      </ul>
  </div>
  </div>
  
                  <div class="section-number-container">
<div>Copyright 2021 <br>Kalypso Network</div>
<div class="number-bar"></div>
    </div>
  
  </div>
</template>
<script>
</script>


<style scoped>

.footer-links
{
    color:white;
    text-decoration:none;
}

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
    padding:30px 20px;
    min-height:300px;
    border-top:1px solid #fff;
    width:100%;
    overflow:hidden;
}   
.layout-footer
{
    
    width:100%;
    background-color:#0f0f0f;
    color:#fff;
    display:flex;
    padding:0px 0px;
    flex-direction:column
}
}
</style>