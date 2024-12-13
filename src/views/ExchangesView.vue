<template>
  <div id="exchanges_view">
    <svg class="coins" width="483" height="475" viewBox="0 0 483 475" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.28">
        <circle cx="320" cy="184" r="133" transform="rotate(-15 320 184)" fill="#09836C"/>
        <circle cx="316.938" cy="182.232" r="130.5" transform="rotate(-15 316.938 182.232)" fill="#02FFCF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M340.412 258.247L398.557 156.491L306.473 102.777L325.034 127.171L382.619 160.761L336.103 242.166L255.117 194.926L288.094 136.268L292.099 106.583L239.179 199.196L340.412 258.247Z" fill="#0F493E"/>
        <path d="M336.103 242.166L292.099 106.583L288.094 136.268L336.103 242.166Z" fill="#0F493E"/>
        <path d="M306.473 102.777L336.103 242.166L325.034 127.171L306.473 102.777Z" fill="#0F493E"/>
      </g>
      <g opacity="0.8">
        <circle cx="181.681" cy="181.681" r="133" transform="rotate(30 181.681 181.681)" fill="#09836C"/>
        <circle cx="180.766" cy="178.266" r="130.5" transform="rotate(30 180.766 178.266)" fill="#02FFCF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M143.614 248.615L256.681 217.778L229.55 114.683L225.425 145.057L242.392 209.528L151.938 234.198L128.077 143.528L192.872 125.369L216.695 107.211L113.787 135.278L143.614 248.615Z" fill="#0F493E"/>
        <path d="M151.938 234.198L216.695 107.211L192.872 125.369L151.938 234.198Z" fill="#0F493E"/>
        <path d="M229.55 114.683L151.938 234.198L225.425 145.057L229.55 114.683Z" fill="#0F493E"/>
      </g>
      <g>
        <circle cx="250.891" cy="311.891" r="133" transform="rotate(-15 250.891 311.891)" fill="#09836C"/>
        <circle cx="247.829" cy="310.123" r="130.5" transform="rotate(-15 247.829 310.123)" fill="#02FFCF"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M271.303 386.138L329.448 284.382L237.364 230.668L255.925 255.062L313.51 288.652L266.994 370.057L186.008 322.817L218.985 264.159L222.99 234.474L170.07 327.087L271.303 386.138Z" fill="#0F493E"/>
        <path d="M266.994 370.057L222.99 234.474L218.985 264.159L266.994 370.057Z" fill="#0F493E"/>
        <path d="M237.364 230.668L266.994 370.057L255.925 255.062L237.364 230.668Z" fill="#0F493E"/>
      </g>
    </svg>
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="bg">
        <div class="bgtr"></div>
        <div class="bgt"></div>
      </div>
    </header>
    <main> 
      <h2>
        Exchanges ({{ exchanges.length }})
        <div>
          Use at your own risk, and never keep your coins on the platform after trading.
          Not your keys, not your coins!
        </div>
      </h2>
      <div class="sort-container">
        <button :class="{ active: sort === 'volume' }" @click="setSort('volume')">Sort By Volume</button>
        <div>|</div>
        <button :class="{ active: sort === 'date' }" @click="setSort('date')">Sort By Added Date</button>
      </div>
      <div class="exchange-list">
        <a v-for="(ex, index) in exchanges" v-bind:key="index" class="exchange" :href="ex.link">
          <div class="title">{{ ex.name }}</div>
          <div class="ebg" :style="{ backgroundImage: 'url(' + ex.market_img + ')' }"></div>
          <img :alt="'Logo of ' + ex.name" :src="ex.logo_img" />
        </a>
      </div>
    </main>
  </div>
</template>

<script>
import NavigationMenu from '@/components/NavigationMenu.vue';
import exchanges from '../components/sections/exchanges_section/exchanges.js';

import meta from '@/meta.js';

export default {
  name: 'ExchangesView',
  components: {
    NavigationMenu
  },
  mounted() {
    document.title =  meta['/exchanges'].title;
  },
  methods: {
    setSort(value) {
      this.$router.push({ path: '/exchanges', query: { sort: value }});
    }
  },
  computed:{
    sort() {
      return this.$route.query.sort || 'volume';
    },
    exchanges() {
      if (this.sort === "date") {
        return exchanges;
      }

      return Object.assign([], exchanges).sort((a, b) => a.sort_volume - b.sort_volume);
    },
  },
  inject: ['isSafari']
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#exchanges_view {
  margin-bottom: 15rem;

  main {
    position: relative;
    z-index: 1;
  }

  .coins {
    position: absolute;
    right: 0;
    top: -200px;
    animation: anim-coins 150s infinite;
    opacity: .05;

    >:nth-child(1) {
      animation: anim-coin 160s infinite;
      transform-origin: center center;
    }

    >:nth-child(2) {
      animation: anim-coin 220s infinite;
      transform-origin: center center;
    }

    >:nth-child(3) {
      animation: anim-coin 130s infinite;
      transform-origin: center center;
    }
  }

  @keyframes anim-coin {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes anim-coins {
    0% {
      transform: scale3d(2, 2, 1);
    }
    100% {
      transform: scale3d(2, 2, 1) rotate(360deg);
    }
  }

  h2 {
    > div {
      font-size: 2rem;
      opacity: .7;
      margin-top: .5rem;
      font-weight: lighter;
    }
  }

  .sort-container {
    display: flex;
    gap: 1rem;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 5rem;
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

  .exchange-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }

    .exchange {
      width: 100%;
      background-size: cover;
      background-position: center;
      cursor: pointer;
      padding: 3rem;
      text-align: center;
      display: flex;
      justify-content: center;
      flex-direction: column;
      background: linear-gradient(90deg, var.$dark-ascent-color, transparent);

      gap: 1.5rem;
      align-items: center;
      font-weight: bold;
      font-size: 2.5rem;
      color: var.$ascent-color;
      position: relative;
      transition: all .25s;

      @media screen and (min-width: 1024px) {
        background: linear-gradient(var.$dark-ascent-color, transparent);
        width: 20rem;
        height: 30vw;
      }

      img {
        width: 7rem;
        height: 7rem;
      }

      .ebg {
        position: absolute;
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        opacity: .06;
        filter: blur(1px);
      }

      &:hover {
        border: .4rem solid var.$ascent-color;
        transform: translateX(-5px);

        @media screen and (min-width: 1024px) {
          transform: translateY(-20px);
        }

        .ebg {
          opacity: .1;
          filter: blur(0);
        }
      }
    }
  }
}
</style>