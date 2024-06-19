<template>
  <div class="supply-bar">
    <div class="supply-bar-graph" :style="{ height: amount*25 + 'px' }">
      <div class="supply-bar-graph-year">{{ year }}</div>
    </div>
    <div class="supply-bar-amount">{{ amount }}m</div>
  </div>
</template>

<script>
export default {
  name: 'SupplyBar',
  props: ['amount', 'year']
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

.supply-bar {
  display: flex;
  flex-direction: column-reverse;
  gap: 1rem;

  .supply-bar-amount {
    font-weight: bold;
    color: var.$ascent-color;
  }
}

.supply-bar-graph {
  background-color: var.$dark-ascent-color;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;

  .supply-bar-graph-year {
    position: absolute;
    bottom: 1rem;
    writing-mode: vertical-lr;
    user-select: none;
    font-weight: bold;
    color: var.$ascent-color;
  }

  &:hover {
    background-color: var.$ascent-color;

    .supply-bar-graph-year {
      color: black;
    }
  }
}
</style>