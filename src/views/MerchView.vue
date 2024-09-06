<template>
  <div id="merch">
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="bg">
        <XelisLogo />
        <div class="bgtr"></div>
        <div class="bgm"></div>
        <div class="bgt"></div>
      </div>
    </header>
    <main>
      <div class="header">
        <div>
          <div class="title">Merch</div>
          <div class="subtitle">68 premium products</div>
        </div>
        <img src="/merch/merch.webp" />
      </div>
      <div class="type-filter">
        <div v-for="filter in filters" :key="filter" :class="{ active: isActiveFilter(filter) }" @click="setFilter(filter)">
          {{ filter }}&nbsp;&nbsp;({{ filterItemCount(filter) }})
        </div>
      </div>
      <div class="content" v-if="itemCount === 0">
        No items for this category.
      </div>
      <div class="content" v-if="itemCount > 0">
        <div>
          <div class="item-count">
            <svg class="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="prevItemIndex()">
              <g>
                <path
                  d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                  stroke="currentColor" stroke-width="2"></path>
                <path d="M16 12L8 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
            <div class="text">{{ itemIndex }} / {{ itemCount }} items</div>
            <svg class="arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="nextItemIndex()">
              <g>
                <path
                  d="M3 12C3 4.5885 4.5885 3 12 3C19.4115 3 21 4.5885 21 12C21 19.4115 19.4115 21 12 21C4.5885 21 3 19.4115 3 12Z"
                  stroke="currentColor" stroke-width="2"></path>
                <path d="M16 12L8 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></path>
                <path d="M13 15L15.913 12.087V12.087C15.961 12.039 15.961 11.961 15.913 11.913V11.913L13 9"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </g>
            </svg>
          </div>
          <div v-for="(item, index) in items" :key="index">
            <div class="item" v-if="index === (itemIndex-1)">
              <div class="item-info">
                <div class="title">{{item.title}}</div>
                <div class="description">{{item.description}}</div>
                <div>
                  <a :href="item.link" target="_blank">
                    Go to supplier
                  </a>
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
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";

import merch_items from '../components/merch_items.js';
console.log(merch_items)
export default {
  name: 'MerchView',
  components: {
    NavigationMenu,
  },
  computed: {
    filter() {
      return this.$route.query.filter || "Hoodies";
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

  .header {
    display: flex;
    margin-bottom: 5rem;
    justify-content: space-between;
    align-items: center;

    .title {
      font-family: "Helios Bold";
      font-size: 5rem;
    }

    .subtitle {
      font-family: "Helios";
      opacity: .6;
      font-size: 2rem;
    }

    img {
      min-width: 40%;
      max-width: 40%;
    }

    @media screen and (min-width: 700px) {
      img {
        min-width: 20%;
        max-width: 20%;
      }
    }
  }

  .type-filter {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 5rem;
    font-size: 2rem;
    flex-wrap: wrap;

    > div {
      cursor: pointer;
      opacity: .8;
      background: black;
      padding: .75rem 1.5rem;
      border-bottom: .25rem solid transparent;

      &.active, &:hover {
        opacity: 1;
        border-bottom: .25rem solid white;
      }
    }
  }

  .content {
    display: flex;
    gap: 5rem;
    flex-direction: column;
    align-items: center;

    .item-count {
      font-weight: bold;
      font-size: 2.5rem;
      margin-bottom: 5rem;
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
        cursor: pointer;
        color: white;
        opacity: .8;

        &:hover {
          opacity: 1;
        }
      }
    }

    .item {
      display: flex;
      gap: 5rem;
      flex-direction: column;

      .item-info {
        display: flex;
        gap: 1rem;
        flex-direction: column;

        .title {
          font-size: 4rem;
          font-weight: bold;
        }

        .description {
          opacity: .8;
          margin-bottom: 4rem;
        }
      }

      a {
        padding: 1rem 2rem;
        border: .25rem solid white;
        color: white;
        display: inline-block;
        font-weight: bold;
        
        &:hover {
          background: white;
          color: black;
          transform: scale(.96);
        }
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
      align-items: start;
    }
  }
}
</style>

