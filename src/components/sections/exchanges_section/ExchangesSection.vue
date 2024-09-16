<template>
    <section id="exchanges">
        <div id="exchanges-container">
          <div class="angle tl"></div>
          <div class="angle tr"></div>
          <div class="angle bl"></div>
          <div class="angle br"></div>

          <div class="exchanges-header">
            <h2>Exchanges (7)</h2>
          </div>
          <div class="sort-container">
            <button :class="{ active: exchangeSort === 'volume' }" @click="exchangeSort = 'volume'">Sort By Volume</button>
            <div>|</div>
            <button :class="{ active: exchangeSort === 'date' }" @click="exchangeSort = 'date'">Sort By Added Date</button>
          </div>
          <div class="exchanges-content scroll-bar">
            <ExchangeBox v-for="(exchange, index) in exchanges" v-bind:key="index"
            :name="exchange.name" :link="exchange.link" 
            :logo_img="exchange.logo_img" :market_img="exchange.market_img" />
          </div>
        </div>
    </section>
</template>

<script>
import ExchangeBox from "@/components/sections/exchanges_section/ExchangeBox.vue";
import exchanges from './exchanges.js';

export default {
  components: {
    ExchangeBox
  },
  data() {
    return {
      exchangeSort: "volume"
    };
  },
  computed:{
    exchanges() {
      if (this.exchangeSort === "date") {
        return exchanges;
      }

      return Object.assign([], exchanges).sort((a, b) => a.sort_volume - b.sort_volume);
    },
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

    .sort-container {
      display: flex;
      gap: 1rem;
      flex-direction: row;
      justify-content: center;
      margin-bottom: 2rem;
      align-items: center;

      button {
        border: thin solid var.$ascent-color;
          background: transparent;
          padding: .75rem 2rem;
          font-weight: bold;
          border-radius: .5rem;
          color: var.$ascent-color;
          cursor: pointer;

        &.active {
          background: var.$ascent-color;
          border: none;
          color: black;
        }
      }
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