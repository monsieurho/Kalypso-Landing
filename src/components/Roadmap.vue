<template>
<div class='wrapper'>
<div class='steps' id='steps'>
    <h2 class="title-roadmap" v-scroll-reveal.reset>Roadmap</h2>
  <div class='step' v-scroll-reveal.reset>
    <div class='number completed'>
      <svg viewBox="0 0 512 512" width="100" title="check">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
    </div>
    <div class='info'>
      <p class='title' >
        Desktop and mobile provider app launch
      </p>
      <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate.</p>
    </div>
  </div>

  <div class='step' v-scroll-reveal.reset>
    <div class='number'>2</div>
    <div class='info'>
      <p class='title'>Proxy network open to users</p>
      <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate.</p>
    </div>
  </div>
  
    <div class='step' v-scroll-reveal.reset>
    <div class='number'>2</div>
    <div class='info'>
      <p class='title'>VPN feature roll out to individual users</p>
      <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate.</p>
    </div>
  </div>
  
    <div class='step' v-scroll-reveal.reset>
    <div class='number'>2</div>
    <div class='info'>
      <p class='title'>Machine Learning Integration for data scraping</p>
      <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate.</p>
    </div>
  </div>
  
    <div class='step'  v-scroll-reveal.reset>
    <div class='number'>2</div>
    <div class='info'>
      <p class='title'>Rewards</p>
      <p class='text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat pariatur minima nemo? Facilis veniam reprehenderit quaerat aspernatur, quis voluptas voluptate.</p>
    </div>
  </div>
 
  
</div>
</div>
</template>

<script>
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");
*, *:before, *:after {
  box-sizing: border-box;
}

.wrapper {
  font-family: SF Mono, sans-serif;
  background-color: #0000ff;
  padding-top:100px;
  padding-bottom:100px;
}

.title-roadmap {
  color: #fff;
}

.wrapper {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.steps {
  max-width: 300px;
  margin: 0 auto;
}

.step {
  display: flex;
  position: relative;
}
.step:after {
  content: "";
  position: absolute;
  left: 15px;
  top: 32px;
  height: 0;
  width: 2px;
  background-color: #fff;
}
.step .info {
  margin: 8px 0 20px;
}
.step .title {
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 8px;
  color: white;
}
.step .text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  padding-bottom: 0;
  margin: 0;
}
.step:not(:last-child):after {
  height: 75%;
}

.number {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border-radius: 50%;
  border: 2px solid #fff;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
  margin-right: 14px;
}
.number.completed {
  background-color: #fff;
}
.number svg {
  width: 16px;
  height: 16px;
  object-fit: contain;
}
.number svg path {
  fill: white;
}
</style>