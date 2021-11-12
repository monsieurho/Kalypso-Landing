<template>
  <div class="about-contract-wrapper">
    <div class="about-contract-container">
      <div class="demo-part">
        <h2>Try the demo</h2>
        <p>
          The Kalypso Network is the world's first truly decentralized
          privacy network and bandwitdh marketplace. Made for you.
        </p>
        <a class="demo-market" href="mailto:hello@kalypso.network">Contact Us</a>
        <a class="demo-market other" href="../assets/kalypso-provider-extension.zip">Download Chrome Extension</a>
      </div>

      <div class="number-figures">
        <div>
          <h5>CONNECTED DEVICES</h5>
          <h3>45</h3>
        </div>
        <div>
          <h5>DATA PROCESSED</h5>
          <h3>1,345 GB</h3>
        </div>
        <div>
          <h5>CONTRACT ADDRESS</h5>
          <h3>
            <svg style="position:relative;top:10px" width="30px" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="17" cy="17" r="17" fill="url(#paint0_linear)" />
              <path
                d="M29.1702 17.2071H26.1733C26.1733 11.0997 21.205 6.14893 15.0758 6.14893C9.02255 6.14893 4.10117 10.9785 3.98072 16.9813C3.85611 23.1863 9.69824 28.5745 15.9261 28.5745H16.7095C22.2001 28.5745 29.5592 24.2916 30.709 19.0732C30.9213 18.1113 30.1588 17.2071 29.1702 17.2071ZM10.6223 17.4792C10.6223 18.2959 9.95192 18.9639 9.13229 18.9639C8.31265 18.9639 7.64231 18.2956 7.64231 17.4792V15.0773C7.64231 14.2606 8.31265 13.5926 9.13229 13.5926C9.95192 13.5926 10.6223 14.2606 10.6223 15.0773V17.4792ZM15.7961 17.4792C15.7961 18.2959 15.1258 18.9639 14.3062 18.9639C13.4865 18.9639 12.8162 18.2956 12.8162 17.4792V15.0773C12.8162 14.2606 13.4868 13.5926 14.3062 13.5926C15.1258 13.5926 15.7961 14.2606 15.7961 15.0773V17.4792Z"
                fill="url(#paint1_linear)" />
              <defs>
                <linearGradient id="paint0_linear" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#534BB1" />
                  <stop offset="1" stop-color="#551BF9" />
                </linearGradient>
                <linearGradient id="paint1_linear" x1="17.3617" y1="6.14893" x2="17.3617" y2="28.5745"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="white" />
                  <stop offset="1" stop-color="white" stop-opacity="0.82" />
                </linearGradient>
              </defs>
            </svg>
            J7xDgZe6JNpyj[TBA]
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const tokenAddress = "0xd00981105e61274c8a5cd5a88fe7e037d935b513";
const tokenSymbol = "RIFLE";
const tokenDecimals = 18;
const tokenImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Solid_blue.svg/2048px-Solid_blue.svg.png";

console.log("Riflebird Network: constant declared");

export default {
  mounted() {
    if (typeof window.ethereum !== "undefined") {
      console.log("Riflebird Network: MetaMask is installed");
    }
  },
  methods: {
    addTokenFunction: async function () {
      console.log("test successful - 1");

      try {
        const wasAdded = await ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20", // Initially only supports ERC20, but eventually more!
            options: {
              address: tokenAddress, // The address that the token is at.
              symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
              decimals: tokenDecimals, // The number of decimals in the token
              image: tokenImage, // A string url of the token logo
            },
          },
        });

        if (wasAdded) {
          console.log(
            "Riflebird Network: RIFLE token has been added successfully"
          );
        } else {
          console.log("Riflebird Network: RIFLE token has not been added");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};

console.log("Riflebird Network: Success");
</script>

<style scoped>
.about-contract-wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: #0f0f0f;
  min-height: 200px;
  padding-bottom: 200px;
  overflow-x:hidden;
}
.about-contract-container {
  width: 1000px;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
}
.about-contract-container > div {
  color: #fff;
  width: 50%;
}

.about-contract-wrapper h2 {
  font-weight: 400;
  font-size: 45px;
  color: white;
  margin-bottom: 0px;
  margin-top: 0px;
}
.about-contract-wrapper h3 {
  margin-bottom: 0px;
  margin-top: 0px;
}
.about-contract-wrapper h5 {
  margin-bottom: 0px;
  margin-top: 0px;
  opacity: 0.7;
}

.about-contract-container p {
  color: white;
  margin-bottom: 50px;
}

.number-figures {
  text-align: right;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.number-figures > div {
  width: 45%;
}
.number-figures div:nth-child(3) {
  width: 80%;
}

.demo-market {
  background-color: #0000ff;
  border-radius: 50px;
  min-height: 52px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 30px;
  padding-left: 30px;
  color: #fff;
  transition: all ease-in 0.2s;
  border: #0000ff solid 1.5px;
  text-decoration: none;
}
.demo-market:hover {
  color: #fff;
  text-decoration: none;
}
.other {
  background-color: #56dfbf;
  border: #56dfbf solid 1.5px;
  margin-left: 20px;
}
.add-to-metamask {
  color: #9958c5;
  transition: all ease-in 0.5s;
  text-decoration: none;
}
.add-to-metamask:hover {
  border-bottom: #9958c5 dashed 1px;
  transition: all ease-in 0.5s;
  cursor: pointer;
}

@media (max-width:768px)
{
.about-contract-wrapper
{
flex-direction: column;
  width: 100%;

}
.about-contract-container{
  flex-direction:column;
    width: 100%;

}
.about-contract-container > div {
  width: 100%;
  flex-direction:column;

}
.demo-part
{
  padding:0px 20px;
  width:100%;
}
.demo-market.other
{
  display:none;
}
.number-figures {
display:none;
}
}
</style>