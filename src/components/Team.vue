<template>
<div class="card-container">
<h1 class="title">COUNCIL MEMBERS</h1>
<div class="team-wrapper-bcn" style="min-height:460px;">
<article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">Kenneth Shek</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>

</article>
  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">Michael Siu</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>

</article>
  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">Gregory Ho</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
</article>

  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">John Patrick Mullin</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
</article>

  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">Alan Yu</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
</article>

  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">Will Corkin</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
</article>

  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">Warwick Maddock</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
</article>


  <article class="card">
  <header class="card__thumb">
    <a href="#"><img src="https://i.pinimg.com/originals/7c/a5/14/7ca514f40c0460816871ceb23929f1d1.jpg" width="300px"/></a>
  </header>
  
  <div class="card__body">
    <h2 class="card__title"><a href="#">John Patrick Mullin</a></h2>
    <div class="card__subtitle">Technical Marketer</div>
    <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit cumque non commodi, modi recusandae cupiditate ipsa ab soluta. Illum, dolore.</p>
  </div>
</article>


</div>
</div>

</template>

<script>
</script>

<style scoped>
.card-container
{
    background-color:#f7f7f7;
}
.team-wrapper-bcn {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width:1200px;
  margin:auto;
  margin-top:0px;
}

/**
* Title
**/
.title {
  text-align: center;
  transform: translateY(20px);
  font-size: 45px;
  color: #0000ff;
  text-transform: uppercase;
  font-weight:400;

}

/**
* CARD
**/
.card {
  position: relative;
  border-radius: 5px;
  width: 25%;
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.5s;
}
.card a {
  color: inherit;
  text-decoration: none;
}

.card:hover {
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

/**
* THUMB
**/
.card__thumb {
  height: 245px;
  overflow: hidden;
  background-color: #000;
  transition: height 0.5s;
}
.card__thumb img {
  display: block;
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s, transform 0.5s;
}
.card:hover .card__thumb {
  height: 130px;
}

.card:hover .card__thumb img {
  opacity: 0.6;
  transform: scale(1.2);
}

/**
* BODY
**/
.card__body {
  position: relative;
  height: 200px;
  padding: 20px;
  padding-bottom: 0px;
  transition: height 0.5s;
}
.card:hover .card__body {
  height: 300px;
}

.card__title {
  margin: 0;
  padding: 0 0 10px 0;
  color: #000;
  font-size: 22px;
  font-weight: bold;
  text-transform: uppercase;
}

.card__subtitle {
  margin: 0;
  padding: 0 0 10px 0;
  font-size: 19px;
  color: blue;
}

.card__description {
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 30px;
  margin: 0;
  padding: 0;
  color: #666C74;
  line-height: 25px;
  opacity: 0;
  transform: translateY(45px);
  transition: opacity 0.3s, transform 0.3s;
  transition-delay: 0s;
}
.card:hover .card__description {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
}

.card__footer {
  position: absolute;
  bottom: 12px;
  left: 20px;
  right: 20px;
  font-size: 11px;
  color: #A3A9A2;
}

.icon {
  display: inline-block;
  vertical-align: middle;
  margin: -2px 0 0 2px;
  font-size: 18px;
}
.icon + .icon {
  padding-left: 10px;
}
</style>