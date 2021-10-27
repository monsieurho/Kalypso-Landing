<template>
  <div class="about-contract-wrapper">
    <div class="about-contract-container">
      <div>
        <h2>Try the demo</h2>
        <p>
          The Riflebird Network is the world's first ever truly decentralized
          proxy network. Made for you.
        </p>
        <g-link class="demo-market" to="/demo/">Try now</g-link>
        <g-link class="demo-market other" to="/demo/"
          >Download Chrome Extension</g-link
        >
      </div>

      <div class="number-figures">
        <div>
          <h5>CONNECTED DEVICES</h5>
          <h3>43</h3>
        </div>
        <div>
          <h5>DATA PROCESSED</h5>
          <h3>1,345 GB</h3>
        </div>
        <div>
          <h5>CONTRACT ADDRESS</h5>
          <h3>
            <img width="20px" src="../assets/metamask.svg" />
            0x3282378254527473653475
          </h3>
          <a v-on:click="addTokenFunction()" class="add-to-metamask"
            >Add to MetaMask</a
          >
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
</style>