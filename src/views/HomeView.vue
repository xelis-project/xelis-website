<template>
  <div>
    <header class="home-header" :class="{ safari: isSafari }">
      <NavigationMenu />
      <div class="header-content">
        <HeroSection />
      </div>
      <div class="bg">
        <XelisLogo />
        <CircuitImg />
      </div>
    </header>
    <main id="home">
      <QuadSection />
      <FeaturesSection />
      <ObjectivesSection />
      <div class="network-supply-row">
        <NetworkSection />
        <SupplySection />
      </div>
      <BlockDAGSection />
      <TimelineSection />
      <SocialSection />
    </main>
  </div>
</template>

<script>
import ObjectivesSection from "@/components/sections/ObjectivesSection.vue";
import NetworkSection from "@/components/sections/NetworkSection.vue";
import SupplySection from "@/components/sections/supply_section/SupplySection.vue";
import BlockDAGSection from "@/components/sections/BlockDAGSection.vue";
import SocialSection from "@/components/sections/SocialSection.vue";
import TimelineSection from '@/components/sections/TimelineSection.vue';

import NavigationMenu from "@/components/NavigationMenu.vue";
import HeroSection from "@/components/HeroSection.vue";
import XelisLogo from "@/components/XelisLogo.vue";
import CircuitImg from "@/components/CircuitImg.vue";
import FeaturesSection from '@/components/sections/FeaturesSection.vue';
import QuadSection from '@/components/sections/QuadSection.vue';

import meta from "@/meta";

export default {
  name: "HomeView",
  components: {
    ObjectivesSection,
    NetworkSection,
    SupplySection,
    BlockDAGSection,
    SocialSection,
    TimelineSection,
    FeaturesSection,
    QuadSection,

    NavigationMenu,
    HeroSection,
    XelisLogo,
    CircuitImg,
  },
  inject: ['isSafari'],
  mounted() {
    document.title =  meta['/'].title;
  },
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

@media screen and (min-width: 1180px) {
  .network-supply-row {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: var.$spacing-body;
    align-items: stretch;
    margin-bottom: var.$spacing-body;

    > section {
      height: 100%;
      margin-bottom: 0;
    }
  }
}
</style>
