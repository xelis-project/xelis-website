<template>
  <div v-if="!isSafari" id="noise_effect"></div>
  <router-view v-slot="{ Component }">
    <transition name="fade-router" mode="out-in" :css="!preRendered">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterSection :class="{safari: isSafari}" />
</template>

<script>
import FooterSection from "./components/FooterSection.vue";

// preload views by importing and avoid page load flicker
import "./views/ResourcesView.vue";
import "./views/HomeView.vue";
import "./views/NotFound.vue";
import "./views/RoadmapView.vue";
import "./views/ExchangesView.vue";

export default {
  name: "App",
  components: {
    FooterSection,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  provide() {
    return {
      isSafari: this.isSafari
    }
  },
  computed: {
    isSafari() {
      const userAgent = navigator.userAgent.toLowerCase();
      const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("android");
      const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

      return isSafari || isIos;
    }
  },
  mounted() {
    this.isMobile = window.matchMedia("(max-width: 748px)").matches;

    // Check if an element is in the viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= (window.innerHeight || document.documentElement.clientHeight);
    }

    // Animated blocks
    const scrollHandler = () =>  {
      const elements = document.querySelectorAll(".is-animated");
      [...elements].forEach((el) => {
        if (isInViewport(el)) {
          el.classList.add("active");
        }
      });
    }
    document.addEventListener("scroll", scrollHandler);
    scrollHandler();
  },
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
</style>
