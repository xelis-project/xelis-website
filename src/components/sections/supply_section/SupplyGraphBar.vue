<template>
  <div class="supply-bar">
    <div class="supply-bar-graph is-animated" :style="{ height: amount*25 + 'px' }">
      <div class="supply-bar-graph-year">{{ year }}</div>
    </div>
    <div class="supply-bar-amount is-animated">{{ amount }}m</div>
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

    &.active {
      animation: supply-bar-amount-anim 3s;
    }
  }
}

@keyframes supply-bar-amount-anim {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.supply-bar-graph {
  background: linear-gradient(var.$dark-ascent-color, transparent);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;

  &.active {
    animation: supply-bar-graph-anim 0.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards;
    transform-origin: bottom;
  }

  .supply-bar-graph-year {
    position: absolute;
    bottom: 1rem;
    writing-mode: vertical-lr;
    user-select: none;
    font-weight: bold;
    color: var.$ascent-color;
  }

  &:hover {
    background: var.$ascent-color;

    .supply-bar-graph-year {
      color: black;
    }
  }
}

@keyframes supply-bar-graph-anim {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(100%);
  }
}
</style>