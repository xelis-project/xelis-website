<template>
  <div id="roadmap_view">
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="bg">
        <div class="bgtr"></div>
        <div class="bgt"></div>
        <CircuitImg />
      </div>
    </header>
    <main>
      <TasksSection />
      <TimelineSection />
    </main>
  </div>
</template>

<script>

import TimelineSection from '@/components/sections/TimelineSection.vue';
import NavigationMenu from '@/components/NavigationMenu.vue';
import TasksSection from '@/components/sections/tasks_section/TasksSection.vue';
import CircuitImg from '@/components/CircuitImg.vue';

import meta from '@/meta';

export default {
  name: 'RoadmapView',
  components: {
    NavigationMenu,
    TasksSection,
    TimelineSection,
    CircuitImg
  },
  inject: ['isSafari'],
  mounted() {
    document.title =  meta['/roadmap'].title;
  },
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

</style>