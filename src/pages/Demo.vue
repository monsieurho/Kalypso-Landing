<template class="demo">
<div class="demo-container">
<div class="courses-container">
	<div class="course">
		<div class="course-preview">
			<h6>Market Research</h6>
			<h2>Reddit scraping demo</h2>
			<a href="#">Explore other use cases for proxys and VPNs<i class="fas fa-chevron-right"></i></a>
		</div>
		<div class="course-info">
			<div class="progress-container">
				<div class="progress"></div>
				<span class="progress-text">
                    
					<span>54</span> devices connected
				</span>
			</div>
			<h6>Select the coin <br>you'd like to track</h6>
			<h2>Lorem ipsum dolare</h2>
            <select class="demo-select">
                <option>BTC</option>
                <option>ETH</option>
                <option>MATIC</option>
                <option>XRP</option>
                <option>OM</option>
                <option>GLM</option>
            </select>
			<button class="btn">Start</button>
		</div>
	</div>
</div>
</div>
</template>

<script>


</script>

<style scoped>
.demo-container
{
min-height:95vh;
background-color:rgb(240, 240, 240);
justify-content:center;
align-items:center;
}
.demo-container
{
    justify-content:center;
    align-items:center;
    padding-top:100px;
}

.course {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
    border:solid 0.1px rgb(248, 248, 248);
	display: flex;
	max-width: 100%;
	margin: 20px;
	overflow: hidden;
	width: 700px;
    margin:auto;
    min-height:50vh;
}

.course h6 {
	opacity: 0.6;
	margin: 0;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.course h2 {
	letter-spacing: 1px;
	margin: 10px 0;
}

.course-preview {
	background-color: #1100ff;
	color: #fff;
	padding: 30px;
	max-width: 250px;
}

.course-preview a {
	color: #fff;
	display: inline-block;
	font-size: 12px;
	opacity: 0.6;
	margin-top: 30px;
	text-decoration: none;
}

.course-info {
	padding: 30px;
	position: relative;
	width: 100%;
}

.demo-select
{
padding:20px 10px;
}

.progress-container {
	position: absolute;
	top: 30px;
	right: 30px;
	text-align: right;
	width: 150px;
}

.progress {
	background-color: #ddd;
	border-radius: 3px;
	height: 5px;
	width: 100%;
}
.progress:before {
	content:'Latency';
    position:relative;
    font-size:10px;
    top:-27px;
}

.progress::after {
	border-radius: 3px;
	background-color: #00ff15;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	height: 5px;
	width: 76%;
    animation:bar infinite 3s;
}

@keyframes bar 
{
    0% { width:76% }
    29% {width:76%; background-color:#00ff15}
    30% { width: 30%; background-color:orange}
    39% { width: 30%; background-color:orange}
    40% {width:76%; background-color:#00ff15}
    60% { width: 65%}
    69% {width:76%; background-color:#00ff15}
    70% { width: 40%; background-color:orange}
    76% { width: 43%; background-color:orange}
    77% {width:76%; background-color:#00ff15}
    100% { width: 95%}
}

.progress-text {
	font-size: 10px;
	opacity: 0.6;
	letter-spacing: 1px;
}

.btn {
	background-color: #2A265F;
	border: 0;
	border-radius: 50px;
	box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
	color: #fff;
	font-size: 16px;
	padding: 12px 25px;
	position: absolute;
	bottom: 30px;
	right: 30px;
	letter-spacing: 1px;
}
</style>
