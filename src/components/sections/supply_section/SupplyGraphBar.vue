<template>
  <div class="supply-bar">
    <div class="supply-bar-graph is-animated" :style="{ height: width, width: width }">
      <div class="supply-bar-graph-year">{{ year }}</div>
    </div>
    <div class="supply-bar-amount is-animated">{{ amount }}m</div>
  </div>
</template>

<script>
export default {
  name: 'SupplyBar',
  props: ['amount', 'year'],
  computed: {
    width() {
      return Math.min(Math.max(10, (this.amount*100)/18.4), 90) + '%';
    }
  }
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

.supply-bar {
  display: flex;
  gap: 2rem;
  align-items: center;

  @media screen and (min-width: 1024px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }

  .supply-bar-amount {
    font-weight: bold;
    color: var.$ascent-color;
    opacity: 0;
    width: 50px;

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
  display: flex;
  flex-direction: column;
  background: linear-gradient(90deg, transparent, var.$dark-ascent-color);
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1.2rem 0;
  
  &:hover {
    background: linear-gradient(90deg, transparent, var.$ascent-color);
  }

  &.active {
    animation: supply-bar-graph-anim-x 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards;
    transform-origin: left;
  }

  @media screen and (min-width: 1024px) {
    background: linear-gradient(var.$dark-ascent-color, transparent);
    flex-direction: column-reverse;
    gap: 1rem;
    position: relative;
    justify-content: center;
    transform: scaleY(0);
    width: 100% !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    align-items: center;

    .supply-bar-graph-year {
      position: absolute;
      white-space: nowrap;
      bottom: 1rem;
      writing-mode: vertical-lr;
      user-select: none;
      font-weight: bold;
      color: var.$ascent-color;
    }

    
    &:hover {
      background:  linear-gradient(var.$ascent-color, transparent);
    }

    &.active {
      animation: supply-bar-graph-anim-y 1.5s cubic-bezier(0.230, 1.000, 0.320, 1.000) forwards;
      transform-origin: bottom;
    }
  }
}

@keyframes supply-bar-graph-anim-x {
  0% {
    transform: scaleX(0);
  }

  100% {
    transform: scaleX(100%);
  }
}

@keyframes supply-bar-graph-anim-y {
  0% {
    transform: scaleY(0);
  }

  100% {
    transform: scaleY(100%);
  }
}
</style>