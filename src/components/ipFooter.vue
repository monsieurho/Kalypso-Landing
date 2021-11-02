<template>
<div orientation="left" class="bcn_social-bottom-container">
    <ul class="bcn_social-list">
    <li class="bcn_ip"><span class="highlight">your ip </span>{{ip}}</li> 
    </ul>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      response: null,
			ip: null,
			ts: null
    };
  },
	watch: {
    // This should do a substring of the result returned by CloudFlare
    response: function (){
      this.ip = this.response.substring(this.response.search('ip=')+3, this.response.search('ts='));
      this.ts = this.response.substring(this.response.search('ts=')+3, this.response.search('visit_scheme='));
    }
  },
	computed: {
    tsFormatted () {
			return new Date(this.ts * 1000)
		}
  },
  mounted() {
    // Get the user's states from the cloudflare service
    axios
    .get("https://www.cloudflare.com/cdn-cgi/trace")
      .then(response=> (this.response = response.data))
  }
}

console.log("test - 2;")


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
.bcn_social-list::after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #8892b2;
}
.bcn_social-bottom-container {
    width: 40px;
    position: fixed;
    bottom: 0px;
    left: 40px;
    z-index: 10;
    color: #8892b2;
}


.bcn_ip
{
  transform: rotate(-90deg);
  position:relative;
  bottom:40px;
  font-size:12px;
}
.highlight
{
    color:#0000ff;
}
@media (max-width:768px)
{
.bcn_social-bottom-container
{
display:none;
}
}
</style>