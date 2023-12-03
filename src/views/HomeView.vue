<template>
  <div>
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="header-content">
        <HeroSection />
      </div>
      <div class="bg">
        <XelisLogo />
        <div class="bgtr" />
        <div class="bgm" />
        <div class="bgt" />
        <CircuitImg />
      </div>
    </header>
    <main id="home">
      <ObjectivesSection />
      <NetworkSection />
      <RoadMapSection />
      <BlockDAGSection />
      <ClientProtocolSection />
      <SocialSection />
    </main>
  </div>
</template>

<script>
import ObjectivesSection from '@/components/sections/ObjectivesSection.vue';
import NetworkSection from '@/components/sections/NetworkSection.vue';
import RoadMapSection from '@/components/sections/RoadMapSection.vue';
import BlockDAGSection from '@/components/sections/BlockDAGSection.vue';
import ClientProtocolSection from '@/components/sections/ClientProtocolSection.vue';
import SocialSection from '@/components/sections/SocialSection.vue';

import NavigationMenu from "@/components/NavigationMenu.vue";
import HeroSection from "@/components/HeroSection.vue";
import XelisLogo from "@/components/XelisLogo.vue";
import CircuitImg from "@/components/CircuitImg.vue";

export default {
  name: 'HomeView',
  components: {
    ObjectivesSection,
    NetworkSection,
    RoadMapSection,
    BlockDAGSection,
    ClientProtocolSection,
    SocialSection,

    NavigationMenu,
    HeroSection,
    XelisLogo,
    CircuitImg,
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
