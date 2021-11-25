<template>
<div orientation="left" class="bcn_social-bottom-container">
    <ul class="bcn_social-list">
    <li class="bcn_reddit-icon"><a href="https://discord.gg/JJHqx8Y5" target="_blank"><img src="../assets/discord.svg"></a></li>
    <li class="bcn_twitter-icon"><a href="https://twitter.com/KalypsoNetwork" target="_blank"><img src="../assets/twitter.svg"></a></li>
    <li class="bcn_telegram-icon"><a href="hhttps://t.me/+tPAAmaWk49hmMmY1" target="_blank"><img src="../assets/telegram.svg"></a></li>
    <li class="bcn_reddit-icon"><a href="https://www.reddit.com/r/kalypsonetwork/" target="_blank"><img src="../assets/reddit-logo.svg"></a></li>
      
    </ul>
    
    
    
    </div>
</template>

<script>


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bcn_social-list {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
}
.bcn_social-list li {
margin-top:10px;
    transition:ease-out all 1s;
}
.bcn_social-list li img {
    width:23px;
}
.bcn_social-list::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #8892b2;
}
.bcn_social-list li:hover
{
  position:relative;
  top:-5px;
  transition:ease-out all 1s;
}
.bcn_social-bottom-container {
    width: 40px;
    position: fixed;
    bottom: 0px;
    right: 40px;
    z-index: 10;
    color: #8892b2;
}
@media (max-width:768px)
{
.bcn_social-bottom-container
{
display:none;
}
}
</style>