<template>
  <div id="not_found_view">
    <header :class="{safari: isSafari}">
      <NavigationMenu />
    </header>
    <main>
      <div>Not Found</div>
      <div>Error 404</div>
      <div>/ The page you are looking for doesn't exist or was removed.</div>
    </main>
  </div>
</template>

<script>
import NavigationMenu from "@/components/NavigationMenu.vue";

export default {
  name: 'NotFound',
  components: {
    NavigationMenu,
  },
  inject: ['isSafari'],
  mounted() {
    document.title = `XELIS - Not found`
  },
}
</script>

<style lang="scss">
#not_found_view {
  position: relative;
  z-index: 1;

  main {
    margin-bottom: 20rem;

    > :nth-child(1) {
      font-size: 5rem;
      font-weight: bold;
    }

    > :nth-child(2) {
      font-size: 3rem;
    }

    > :nth-child(3) {
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: 300;
    }
  }
}
</style>
