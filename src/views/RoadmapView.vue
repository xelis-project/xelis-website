<template>
  <div id="roadmap_view">
    <header :class="{safari: isSafari}">
      <NavigationMenu />
      <div class="bg">
        <div class="bgtr"></div>
        <div class="bgt"></div>
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

export default {
  name: 'RoadmapView',
  components: {
    NavigationMenu,
    TasksSection,
    TimelineSection,
  },
  inject: ['isSafari']
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

body:not(.menu-open) {
  #roadmap_view {
    header {
      height: unset;
    }
  }
}
</style>