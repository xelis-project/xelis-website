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
          <div v-html="filterIcon(filter)"></div>
          <div>{{ filter }}</div>
          <div>({{ filterItemCount(filter) }})</div>
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
                    <svg width="24px" height="24px" viewBox="0 0 24 24" fill="currentColor">
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
      <div class="disclaimer">
        <svg width="30px" height="30px" viewBox="0 0 18 18" fill="currentColor">
          <path d="M9,14a1.5,1.5,0,1,1,1.5068-1.5A1.5035,1.5035,0,0,1,9,14Z"/>
          <path d="M9,2A7,7,0,1,1,2,9,7.0079,7.0079,0,0,1,9,2M9,0a9,9,0,1,0,9,9A9,9,0,0,0,9,0Z"/>
          <path d="M10,4H8a1,1,0,0,0-.97,1.2425l1,4a1,1,0,0,0,1.94,0l1-4A1,1,0,0,0,10,4Zm0,2h0Z"/>
        </svg>
        PoolPartyNodes is the official supplier of all high-quality XELIS merchandise. The XELIS merch store operates as a non-profit initiative, with all proceeds from sales to the supplier.
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
          Add the items you wish to purchase to your cart on the supplier's platform and proceed to checkout.
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
    filterIcon(filter) {
      let icon = ``;

      switch(filter) {
        case "Hoodies":
           icon =`<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 512.001 512.001">
            <polygon points="285.063,368.426 226.939,368.426 209.708,394.274 209.708,408.106 302.294,408.106 302.294,394.274 		"/>
            <path d="M509.45,351.636l-97.204-205.209c-6.564-13.859-20.527-22.693-35.86-22.693h-14.569v-13.227
              c0-58.439-47.374-105.814-105.814-105.814c-58.438,0-105.812,47.374-105.814,105.812v13.227v0.001h-14.569
              c-15.334,0-29.296,8.835-35.86,22.693L2.552,351.636c-6.161,13.006-0.795,28.55,12.076,34.985l32.536,16.269
              c13.068,6.534,28.957,1.237,35.491-11.83l27.85-55.699v145.494c0,14.61,11.843,26.453,26.453,26.453h238.08
              c14.61,0,26.453-11.843,26.453-26.453V335.361l27.85,55.699c6.534,13.068,22.423,18.364,35.491,11.83l32.536-16.269
              C510.243,380.185,515.609,364.641,509.45,351.636z M317.125,77.439l-61.125,61.125l-61.125-61.125H317.125z M341.974,447.786
              H170.027v-65.528l35.675-53.513h100.597l35.675,53.513V447.786z"/>
          </svg>`;
          break;
        case "T Shirts":
          icon = `<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 295.526 295.526">
            <path d="M147.763,44.074c12.801,0,23.858-8.162,27.83-20.169c-7.578,2.086-17.237,3.345-27.83,3.345
              c-10.592,0-20.251-1.259-27.828-3.345C123.905,35.911,134.961,44.074,147.763,44.074z"/>
            <path d="M295.158,58.839c-0.608-1.706-1.873-3.109-3.521-3.873l-56.343-26.01c-11.985-4.06-24.195-7.267-36.524-9.611
              c-0.434-0.085-0.866-0.126-1.292-0.126c-3.052,0-5.785,2.107-6.465,5.197c-4.502,19.82-22.047,34.659-43.251,34.659
              c-21.203,0-38.749-14.838-43.25-34.659c-0.688-3.09-3.416-5.197-6.466-5.197c-0.426,0-0.858,0.041-1.292,0.126
              c-12.328,2.344-24.538,5.551-36.542,9.611L3.889,54.965c-1.658,0.764-2.932,2.167-3.511,3.873
              c-0.599,1.726-0.491,3.589,0.353,5.217l24.46,48.272c1.145,2.291,3.474,3.666,5.938,3.666c0.636,0,1.281-0.092,1.917-0.283
              l27.167-8.052v161.97c0,3.678,3.001,6.678,6.689,6.678h161.723c3.678,0,6.67-3.001,6.67-6.678V107.66l27.186,8.052
              c0.636,0.191,1.28,0.283,1.915,0.283c2.459,0,4.779-1.375,5.94-3.666l24.469-48.272C295.629,62.428,295.747,60.565,295.158,58.839z
              "/>
          </svg>`;
          break;
        case "Sweatshirts":
          icon = `<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 512 512">
              <path d="M509.865,305.512c-33.633-58.251-4.392-7.595-123.055-213.172c-19.073-33-51.507-29.193-72.517-29.193
                c-4.426,0-8.65,1.841-11.664,5.082l-42.732,45.96c-2.116,2.273-5.691,2.259-7.788,0.005l-42.737-45.965
                c-3.013-3.241-7.238-5.082-11.664-5.082c-20.493,0-53.344-3.957-72.511,29.199C7.31,296.557,33.209,251.696,2.135,305.512
                c-4.397,7.615-1.786,17.36,5.83,21.758l69.42,40.072c7.619,4.397,17.357,1.786,21.755-5.83
                c34.714-60.122,18.653-32.3,36.185-62.672v84.629c0,8.082,6.026,14.743,13.827,15.773v33.832c0,8.796,7.131,15.927,15.927,15.927
                h181.839c8.796,0,15.927-7.131,15.927-15.927v-33.83c7.806-1.026,13.837-7.688,13.837-15.774v-84.61
                c20.002,34.645,6.893,11.943,36.174,62.652c4.398,7.616,14.137,10.227,21.755,5.83l69.42-40.072
                C511.649,322.873,514.263,313.129,509.865,305.512z M79.519,331.792l-41.833-24.147l7.197-12.465l41.833,24.147L79.519,331.792z
                M330.993,417.147H181.008v-17.746h149.985V417.147z M432.481,331.793l-7.197-12.465l41.833-24.147l7.197,12.465L432.481,331.793z
                "/>
          </svg>`;
          break;
        case "Pants":
          icon = `<svg fill="currentColor" height="20px" width="20px" viewBox="0 0 512 512">
            <path d="M286.936,96.786l18.597,32.212c4.933,8.542,2.005,19.466-6.537,24.397c-8.541,4.932-19.466,2.006-24.397-6.537
              L256,114.646l-18.599,32.213c-4.935,8.548-15.862,11.466-24.397,6.537c-8.543-4.932-11.47-15.855-6.537-24.397l18.599-32.213
              H89.561l30.603,330.095h125.489L256,357.895l10.347,68.985h125.489l30.602-330.095H286.936z"/>
            <path d="M271.707,462.602l5.127,34.187c1.312,8.743,8.822,15.211,17.663,15.211h73.168c9.226,0,16.933-7.026,17.784-16.211
              l3.077-33.187H271.707z"/>
            <path d="M406.159,0H105.841c-9.864,0-17.86,7.997-17.86,17.86v43.204h336.039V17.86C424.019,7.997,416.023,0,406.159,0z"/>
            <path d="M123.477,462.602l3.077,33.187c0.851,9.186,8.558,16.211,17.783,16.211h73.168c8.841,0,16.351-6.468,17.663-15.211
              l5.128-34.187H123.477z"/>
          </svg>`;
          break;
        case "Hats":
          icon = `<svg width="20px" height="20px" viewBox="0 0 512 512" fill="currentColor">
            <path d="M511.883,298.395c-2.781-27.281-54.391-46.141-129.406-51.844c-7.172-42.047-15.469-90.563-17.891-103.75
              c-5.563-30.203-45.344-47.094-74.891-25.313c-15.5,11.422-29.359,12.234-36.703,12.234s-15.5,1.625-36.703-12.234
              c-30.719-20.094-69.328-4.891-74.875,25.313c-2.969,16.109-14.688,84.844-22.391,130.203
              C45.211,293.817-2.711,323.114,0.117,350.723c4.25,41.625,122.266,63.671,263.578,49.218
              C405.039,385.488,516.148,340.036,511.883,298.395z M132.289,308.348l8.156-42.406c0,0,145.188,22.828,226.75-19.578l8.156,35.891
              C375.352,282.254,287.258,337.708,132.289,308.348z"/>
          </svg>`;
          break;
        case "Stickers":
          icon = `<svg width="20px" height="20px" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.9595 11.6608C20.7695 10.9108 19.3895 10.5008 17.9695 10.5008C13.8295 10.5008 10.4695 13.8608 10.4695 18.0008C10.4695 19.4208 10.8695 20.7908 11.6195 21.9808C11.1595 21.9708 10.6895 21.9208 10.2095 21.8508C6.0995 21.1508 2.7895 17.8208 2.1095 13.7008C0.979502 6.85075 6.8195 1.01075 13.6695 2.14075C17.7895 2.82075 21.1195 6.13075 21.8195 10.2408C21.8995 10.7208 21.9495 11.2008 21.9595 11.6608Z" />
            <path d="M13.3807 21.86C12.5007 20.82 11.9707 19.47 11.9707 18C11.9707 14.69 14.6607 12 17.9707 12C19.4407 12 20.7907 12.53 21.8307 13.41" />
          </svg>`;
          break;
        case "Accessories":
          icon = `<svg fill="currentColor" width="20px" height="20px" viewBox="0 0 43.181 43.181">
            <path d="M25.629,11.02h7.332c-9.344-9.21-13.398-9.21-22.742,0h7.332C20.669,8.475,22.51,8.475,25.629,11.02z"/>
            <path d="M39.629,13.02H7.541c-2.762,0-5.264,2.223-5.59,4.965l-1.915,16.12c-0.326,2.742,1.649,4.965,4.41,4.965h34.29
              c2.763,0,4.735-2.223,4.41-4.965L40.76,14.022C40.426,13.642,40.047,13.305,39.629,13.02z"/>
          </svg>`;
          break;
      }

      return icon;
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

    svg {
      margin-top: 4px;
      width: 20px;
      height: 20px;
    }

    > div {
      cursor: pointer;
      opacity: .8;
      background: black;
      padding: 1rem 1.5rem;
      border-bottom: .25rem solid transparent;
      white-space: nowrap;
      display: flex;
      gap: 1.5rem;
      align-items: center;

      &.active, &:hover {
        opacity: 1;
        border-bottom: .4rem solid white;
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

  .disclaimer {
    max-width: 90rem;
    margin: 10rem auto 0 auto;
    display: flex;
    gap: 2rem;
    align-items: center;

    svg {
      min-width: 30px;
      min-height: 30px;
    }
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

