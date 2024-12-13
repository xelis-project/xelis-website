<template>
  <li v-if="$route.name !== 'home'">
    <router-link :to="{name: 'home'}">
      Home
    </router-link>
  </li>
  <li v-if="$route.name !== 'roadmap'">
    <router-link :to="{name: 'roadmap'}">
      Roadmap
    </router-link>
  </li>
  <li v-if="$route.name !== 'resources'">
    <router-link :to="{name: 'resources'}">
      Resources
    </router-link>
  </li>
  <li v-if="$route.name !== 'merch'">
    <router-link :to="{name: 'merch'}">
      Merch
    </router-link>
  </li>
  <li v-if="$route.name !== 'exchanges'">
    <router-link :to="{name: 'exchanges'}">
      Exchanges
    </router-link>
  </li>
  <li>
    <a href="https://xeliscommunity.org/" target="_blank">
      Blog
    </a>
  </li>
  <li>
    <a href="https://docs.xelis.io/" target="_blank">
      Documentation
    </a>
  </li>
</template>

<script>
export default {
  name: "NavLinks",
  props: [],
}
</script>
