<template>
  <div id="resources_view">
    <header :class="{safari: isSafari}">
      <NavigationMenu />
    </header>
    <main>
      <WalletsSection />
      <NodesSection />
      <MinersSection />
      <LinksSection />
    </main>
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";
import WalletsSection from "@/components/sections/WalletsSection.vue";
import NodesSection from "@/components/sections/NodesSection.vue";
// import ExchangeSection from "@/components/sections/exchanges_section/ExchangesSection.vue";
import MinersSection from "@/components/sections/MinersSection.vue";
import LinksSection from "@/components/sections/LinksSection.vue";

export default {
  name: "ResourcesView",
  components: {
    NavigationMenu,
    WalletsSection,
    NodesSection,
    MinersSection,
    LinksSection,
  },
  inject: ['isSafari']
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

</style>
