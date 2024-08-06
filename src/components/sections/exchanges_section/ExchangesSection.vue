<template>
    <section id="exchanges">
        <div id="exchanges-container">
          <div class="angle tl"></div>
          <div class="angle tr"></div>
          <div class="angle bl"></div>
          <div class="angle br"></div>

          <div class="exchanges-header">
            <h2>Exchanges (5)</h2>
          </div>
          <div class="exchanges-content scroll-bar">
            <ExchangeBox 
              name="TradeOgre" link="https://tradeogre.com/exchange/XEL-USDT"
              logo_img="https://docs.xelis.io/exchanges/tradeogre_logo.png" 
              market_img="https://docs.xelis.io/exchanges/tradeogre.png" 
            />
            <ExchangeBox 
              name="Exbitron" link="https://exbitron.com/trade?market=XEL-USDT"
              logo_img="https://docs.xelis.io/exchanges/exbitron_logo.png" 
              market_img="https://docs.xelis.io/exchanges/exbitron.png" 
            />
            <ExchangeBox 
              name="Seven Seas" link="https://www.sevenseas.exchange/market/XEL-USDT"
              logo_img="https://docs.xelis.io/exchanges/sevenseas_logo.webp" 
              market_img="https://docs.xelis.io/exchanges/sevenseas.png" 
            />
            <ExchangeBox 
              name="NonKYC" link="https://nonkyc.io/market/XEL_USDT"
              logo_img="https://docs.xelis.io/exchanges/nonkyc_logo.png" 
              market_img="https://docs.xelis.io/exchanges/nonkyc.png" 
            />
            <ExchangeBox 
              name="Xeggex" link="https://xeggex.com/market/XEL_USDT"
              logo_img="https://docs.xelis.io/exchanges/xeggex_logo.webp" 
              market_img="https://docs.xelis.io/exchanges/xeggex.png" 
            />
          </div>
        </div>
    </section>
</template>

<script>
import ExchangeBox from "@/components/sections/exchanges_section/ExchangeBox.vue";
export default {
  components: {
    ExchangeBox
  }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#exchanges {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    z-index: -1;
    width: calc(1060.003px / 1920px) * 100vw;
    height: calc(860.003px / 1920px) * 100vw;
    background: rgba(0, 170, 150, 0.2);
    transform: rotate(-120deg);
    filter: blur(90px);
    border-radius: 50%;
  }

  h2 {
    margin-top: 0;
  }

  #exchanges-container {
    background: black;
    position: relative;
    z-index: 10;
    overflow: hidden;
    text-align: center;
    padding: 6rem 6rem;

    &::before {
      content: "";
      position: absolute;
      bottom: -100%;
      right: 10%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 100vw;
      height: calc(360.003px / 1920px) * 100vw;
      background: rgba(0, 170, 150, 0.3);
      transform: rotate(0deg);
      filter: blur(90px);
      border-radius: 50%;
    }

    .angle {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 1px solid var.$ascent-color;
      &.tl {
        top: 0;
        left: 0;
        border-right: 0;
        border-bottom: 0;
      }
      &.tr {
        top: 0;
        right: 0;
        border-left: 0;
        border-bottom: 0;
      }
      &.bl {
        bottom: 0;
        left: 0;
        border-top: 0;
        border-right: 0;
      }
      &.br {
        right: 0;
        bottom: 0;
        border-top: 0;
        border-left: 0;
      }
    }

    .exchanges-content {
      overflow: auto;
      display: flex;
      gap: 1em;
      flex-direction: row;
      justify-content: safe center;
      margin: 0 1em;
      padding-bottom: 1em;
    }
  }
}

@media screen and (max-width: 748px) {
  #exchanges {
    #exchanges-container {
      padding: 5rem 1rem;

      &::before {
        bottom: 0;
        right: unset;
        left: 0;
        width: 100%;
        height: 50%;
        background: rgba(0, 170, 150, 0.7);
      }
    }
  }
}
</style>