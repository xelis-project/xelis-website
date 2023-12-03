<template>
  <div id="resources_view">
    <header :class="{safari: isSafari}">
      <NavigationMenu />
    </header>
    <main>
      <WalletsSection />
      <NodesSection />
      <ExchangeSection />
      <MinersSection />
    </main>
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";
import WalletsSection from "@/components/sections/WalletsSection.vue";
import NodesSection from "@/components/sections/NodesSection.vue";
import ExchangeSection from "@/components/sections/ExchangeSection.vue";
import MinersSection from "@/components/sections/MinersSection.vue";

export default {
  name: "ResourcesView",
  components: {
    NavigationMenu,
    WalletsSection,
    NodesSection,
    ExchangeSection,
    MinersSection
},
  computed: {
    isSafari() {
      const userAgent = navigator.userAgent.toLowerCase();
      const isSafari = userAgent.includes("safari") && !userAgent.includes("chrome") && !userAgent.includes("android");
      const isIos = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

      return isSafari || isIos;
    }
  },
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

body:not(.menu-open) {
  #resources_view {
    header {
      height: unset;
    }
  }
}
</style>
