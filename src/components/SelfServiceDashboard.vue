<template>
<div class="dashboard-wrapper">
<div class="dashboard-image">
    <img src="../assets/dashboard.png">
</div>
<div class="dashboard-headline"> 
    <div class="section-number-container">
<div>02</div>
<div class="number-bar"></div><div>Network Users</div>
    </div>
    <h2>
        Self-service dashboard
    </h2>
    <p>See your detailed proxy usage statistics, easily create sub-users, whitelist your IPs, and conveniently manage your account. Do it all in the Riflebird dashboard.</p>
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

.dashboard-wrapper
{
      background-color:#0f0f0f;
  padding: 10px;
  padding-top:200px;
  padding-bottom:200px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
}
.dashboard-wrapper > div
{
    width:50%;
}
.dashboard-headline{

max-width:30%;
}
.dashboard-image
{
    display:flex;
    justify-content:center;
    align-items:center;
}
.dashboard-headline h2
{
    color:#fff;
font-weight:400;
font-size:45px;
line-height:1;
margin-bottom: 20px;
}
.dashboard-headline p
{
    color:#fff;
      margin-top:0px;
}
.dashboard-wrapper img
{
width:80%;
}



</style>