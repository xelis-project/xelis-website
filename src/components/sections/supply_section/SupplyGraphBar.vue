<template>
  <div class="supply-bar" :style="{ '--supply-progress': progress }">
    <div class="supply-bar-year">{{ year }}</div>
    <div class="supply-bar-track">
      <div class="supply-bar-graph is-animated"></div>
    </div>
    <div class="supply-bar-amount is-animated">{{ amount }}m</div>
  </div>
</template>

<script>
export default {
  name: 'SupplyBar',
  props: ['amount', 'year'],
  computed: {
    progress() {
      return Math.min(Math.max(4, (this.amount * 100) / 18.4), 100) + '%';
    }
  }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

.supply-bar {
  display: grid;
  grid-template-columns: 7.2rem minmax(8rem, 1fr) 5.4rem;
  gap: 1.2rem;
  align-items: center;
  min-width: 0;
  width: 100%;

  .supply-bar-year {
    color: rgba(245, 247, 251, 0.72);
    font-size: 1.3rem;
    font-weight: 700;
    white-space: nowrap;
  }

  .supply-bar-track {
    position: relative;
    height: 1.4rem;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.055);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.045);
  }

  .supply-bar-amount {
    font-weight: bold;
    color: var.$ascent-color;
    opacity: 0;
    width: 5.4rem;
    text-align: right;
    font-size: 1.4rem;

    &.active {
      animation: supply-bar-amount-anim 2s forwards .75s;
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
  width: var(--supply-progress);
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, rgba(2, 255, 207, 0.16), var.$ascent-color);
  box-shadow: 0 0 16px rgba(2, 255, 207, 0.22);
  transform: scaleX(0);
  transform-origin: left;
  
  &:hover {
    background: linear-gradient(90deg, rgba(245, 217, 95, 0.25), var.$ascent-color);
  }

  &.active {
    animation: supply-bar-graph-anim-x 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards;
  }
}

@keyframes supply-bar-graph-anim-x {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(1);
  }
}

@media screen and (max-width: 520px) {
  .supply-bar {
    grid-template-columns: 1fr 5.4rem;
    gap: 0.8rem 1rem;

    .supply-bar-year {
      grid-column: 1 / -1;
    }

    .supply-bar-track {
      grid-column: 1;
    }
  }
}
</style>
