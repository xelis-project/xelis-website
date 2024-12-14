<template>
  <div id="merch">
    <svg style="display: none" version="2.0">
      <defs>
        <symbol id="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <g>
            <path d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z" stroke-width="2"></path>
            <path d="M16 12L8 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
            <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </g>
        </symbol>
      </defs>
      <use href="#arrow-icon"/>
    </svg>
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="bg">
        <XelisLogo />
        <div class="bgtr"></div>
        <div class="bgm"></div>
        <div class="bgt"></div>
      </div>
    </header>
    <div class="store-bg"></div>
    <main>
      <div class="header">
        <div>
          <div class="title">Merch</div>
          <div class="subtitle">84 premium products</div>
        </div>
        <img src="/merch/merch.webp" />
      </div>
      <div class="type-filter scroll-bar">
        <div v-for="filter in filters" :key="filter" :class="{ active: isActiveFilter(filter) }" @click="setFilter(filter)">
          {{ filter }}&nbsp;&nbsp;({{ filterItemCount(filter) }})
        </div>
      </div>
      <div class="content" v-if="itemCount === 0">
        No items for this category.
      </div>
      <div class="item-count">
        <svg class="arrow" @click="prevItemIndex()">
          <use href="#arrow-icon" />
        </svg>
        <div class="text">{{ itemIndex }} / {{ itemCount }} items</div>
        <svg class="arrow" @click="nextItemIndex()">
          <use href="#arrow-icon" />
        </svg>
      </div>
      <div class="content" v-if="itemCount > 0">
        <div>
          <div v-for="(item, index) in items" :key="index">
            <div class="item" v-if="index === (itemIndex-1)">
              <div class="item-info">
                <div class="title">{{item.title}}</div>
                <div class="description">{{item.description}}</div>
                <div>
                  <a class="link" :href="item.link" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 3C3.89543 3 3 3.89543 3 5V6.83772L1.49006 11.3675C1.10052 12.5362 1.8474 13.7393 3 13.963V20C3 21.1046 3.89543 22 5 22H9H10H14H15H19C20.1046 22 21 21.1046 21 20V13.963C22.1526 13.7393 22.8995 12.5362 22.5099 11.3675L21 6.83772V5C21 3.89543 20.1046 3 19 3H5ZM15 20H19V14H17.5H12H6.5H5V20H9V17C9 15.3431 10.3431 14 12 14C13.6569 14 15 15.3431 15 17V20ZM11 20H13V17C13 16.4477 12.5523 16 12 16C11.4477 16 11 16.4477 11 17V20ZM3.38743 12L4.72076 8H6.31954L5.65287 12H4H3.38743ZM7.68046 12L8.34713 8H11V12H7.68046ZM13 12V8H15.6529L16.3195 12H13ZM18.3471 12L17.6805 8H19.2792L20.6126 12H20H18.3471ZM19 5V6H16.5H12H7.5H5V5H19Z" />
                    </svg>
                    Go to supplier
                  </a>
                  <div class="subtext">
                    XELIS is accepted as a form of payment by using the <span class="payment-option-btn" @click="modal_xelis_option = true">XELIS payment option</span>.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <template v-for="(item, index) in items" :key="index">
          <div class="images" v-if="index === (itemIndex-1)">
            <img class="img" :src="item.images[colorIndex-1][img_key]" @mouseenter="img_key = 'hover_src'" @mouseleave="img_key = 'src'"  />
            <div class="colors">
              <template v-for="(image, index) in item.images" :key="index" >
                <div class="color" :class="{ active: isActiveColor(index+1) }" :style="{ background: image.color }" @click="setColorIndex(index+1)"></div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </main>
    <!-- we do prerender the page but because the default filter links is the only one being rendered, we will add all links here hidden for seo -->
    <div class="hidden-seo-links">
      <a target="_blank" v-for="(item, index) in all_merch" :key="index" :href="item.link">{{ item.title }}</a>
    </div>
    <div class="modal" v-if="modal_xelis_option" @click="handleXelisOptionModal($event)">
      <div class="modal-backdrop"></div>
      <div  class="modal-content">
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" @click="modal_xelis_option = false">
          <path d="M15 9.00004L9 15M15 15L9 9.00004M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div>Pay with XELIS!</div>
        <div>
          Add the items you wish to purchase to your cart on the supplier's platform and process to checkout.
          On the checkout page, select the XELIS payment option and complete your payment. Once it is confirmed, finalize
          your order by clicking 'Place Your Order'.
        </div>
        <div>A preview of how it should appear ↓</div>
        <img src="/merch/xelis-payment-option.webp" alt="Buy with XELIS payment option" />
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";

import merch_items from '../components/merch_items.js';
import meta from '../meta';

export default {
  name: 'MerchView',
  components: {
    NavigationMenu,
  },
  mounted() {
    document.title =  meta['/merch'].title;
  },
  computed: {
    filter() {
      return this.$route.query.filter || "Hoodies";
    },
    all_merch() {
      var all = [];
      Object.keys(merch_items).forEach((key) => {
        const merch = merch_items[key] || [];
        merch.forEach((item) => all.push(item));
      })
      return all;   
    },
    items() {
      return merch_items[this.filter] || [];
    },
    itemCount() {
      return this.items.length;
    },
    itemIndex() {
      var itemIndex = this.$route.query.item;
      var index = parseInt(itemIndex) || 1;
      if (index > this.items.length) {
        return 1;
      }

      return index;
    },
    colorIndex() {
      var colorIndex = this.$route.query.color;
      var index = parseInt(colorIndex || 1);
      return index;
    }
  },
  data() {
    return {
      modal_xelis_option: false,
      img_key: "src",
      filters: Object.keys(merch_items),
    };
  },
  methods: {
    isActiveFilter(currentFilter) {
      return this.filter === currentFilter;
    },
    isActiveColor(index) {
      return this.colorIndex === index;
    },
    setFilter(filter) {
      this.$router.push({ path: '/merch', query: { filter, item: 1, color: 1 } });
    },
    prevItemIndex() {
      if (this.itemIndex <= 0) return;
      this.$router.push({ path: '/merch', query: { filter: this.filter, item: this.itemIndex - 1 } });
    },
    nextItemIndex() {
      if (this.itemIndex >= this.itemCount) return;
      this.$router.push({ path: '/merch', query: { filter: this.filter, item: this.itemIndex + 1 } });
    },
    setColorIndex(index) {
      this.$router.push({ path: '/merch', query: { filter: this.filter, item: this.itemIndex, color: index } });
    },
    filterItemCount(filter) {
      return merch_items[filter].length;
    },
    handleXelisOptionModal(e) {
      if(e.target.classList.contains("modal-backdrop")) {
        this.modal_xelis_option = false;
      }
    }
  },
}
</script>

<style lang="scss">
body:not(.menu-open) {
  #merch {
    header {
      height: unset;
    }
  }
}

#merch {
  main {
    position: relative;
    z-index: 1;
    margin-bottom: 20rem;
  }

  .store-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .5;
    filter: blur(6px);
    background-position: center center;
    background-image: url('/public/merch/store-bg.webp');
  }

  .hidden-seo-links {
    display: none;
  }

  .header {
    display: flex;
    margin-bottom: 5rem;
    justify-content: space-between;
    align-items: center;

    .title {
      font-family: "Helios Bold";
      font-size: min(7vw, 6rem);
    }

    .subtitle {
      font-family: "Helios";
      opacity: .6;
      font-size: min(3vw, 3rem);
      margin-top: .5rem;
    }

    img {
      min-width: 200px;
      max-width: 20vw;
    }
  }

  .type-filter {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 5rem;
    font-size: 2rem;
    overflow: auto;
    padding-bottom: 1rem;

    > div {
      cursor: pointer;
      opacity: .8;
      background: black;
      padding: .75rem 1.5rem;
      border-bottom: .25rem solid transparent;
      white-space: nowrap;

      &.active, &:hover {
        opacity: 1;
        border-bottom: .25rem solid white;
      }
    }
  }

  .item-count {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    display: flex;
    gap: 3rem;
    flex-direction: row;
    align-items: center;
    user-select: none;

    .text {
      opacity: .8;
    }

    > :first-child {
      transform: rotate(180deg);
    }

    .arrow {
      width: 50px;
      height: 50px;
      cursor: pointer;
      color: white;
      opacity: .8;

      &:hover {
        opacity: 1;
      }
    }
  }

  .content {
    display: flex;
    flex-direction: column-reverse;
    align-items: start;
    gap: 0;

    .item {
      display: flex;
      gap: 5rem;
      flex-direction: column;
      background: #00000030;
      padding: 3rem;
      backdrop-filter: blur(30px);

      .item-info {
        display: flex;
        gap: 1rem;
        flex-direction: column;

        .title {
          font-size: min(6vw, 5rem);
          font-weight: bold;
        }

        .description {
          opacity: .8;
          margin-bottom: 4rem;
        }
      }

      .link {
        padding: 1rem 2rem;
        border: .25rem solid white;
        color: white;
        display: inline-block;
        font-weight: bold;
        display: inline-flex;
        align-items: center;
        gap: 1rem;
        
        &:hover {
          background: white;
          color: black;
          transform: scale(.96);
        }
      }

      .subtext {
        color: #a0a0a0;
        margin-top: 2rem;
        max-width: 400px;
      }
    }

    .img {
      min-width: 50vw;
      min-height: 50vw;
      max-height: 50vw;
      max-width: 50vw;
      animation: logo-floating 3s ease-in-out infinite;
    }

    @media screen and (min-width: 700px) {
      .img {
        min-width: 25vw;
        min-height: 25vw;
        max-height: 25vw;
        max-width: 25vw;
      }
    }

    .images {
      display: flex;
      backdrop-filter: blur(10px);
      padding: 5rem;
      background: rgba(255, 255, 255, 0.048);
      justify-content: center;
      width: 100%;
    }

    .colors {
      display: flex;
      gap: 1rem;
      flex-direction: column;

      > div {
        min-width: 4rem;
        min-height: 4rem;
        max-width: 4rem;
        max-height: 4rem;
        border-radius: 50%;
        cursor: pointer;

        &:hover, &.active {
          border: .5rem solid white;
        }
      }
    }
  }

  @media screen and (min-width: 700px) {
    .content {
      flex-direction: row;
    }
  }

  .payment-option-btn {
    text-decoration: underline;
    color: #02ffcf;
    cursor: pointer;
  }
  
  .modal {
    padding: 2rem;

    .modal-content {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 3;
      left: 50%;
      translate: -50%;
      background: black;
      padding: 2rem;
      display: flex;
      gap: 2rem;
      flex-direction: column;
      max-width: 600px;

      > :nth-child(1) {
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        margin: 2rem;
      }

      > :nth-child(2) {
        font-size: 2.5rem;
        font-weight: bold;
      }
    }

    .modal-backdrop {
      position: fixed;
      z-index: 2;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

