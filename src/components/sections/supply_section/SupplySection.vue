<template>
  <section id="supply">
    <div class="supply-header">
      <p class="section-kicker">Emission</p>
      <h2>Supply Emission</h2>
      <p class="section-subtitle">
        Instead of halving, the reward is decreasing with each block with a maximum supply of 18.4 million.
      </p>
    </div>
    <div class="supply-stats">
      <div>
        <span>Current curve</span>
        <strong>Per block</strong>
      </div>
      <div>
        <span>Supply cap</span>
        <strong>18.4M</strong>
      </div>
      <div>
        <span>Long horizon</span>
        <strong>2061</strong>
      </div>
    </div>
    <div class="supply-graph scroll-bar">
      <SupplyGraphBar :amount="2.8" :year="'Q2 2025'" />
      <SupplyGraphBar :amount="5.2" :year="'Q2 2026'" />
      <SupplyGraphBar :amount="7.2" :year="'Q2 2027'" />
      <SupplyGraphBar :amount="8.9" :year="'Q2 2028'" />
      <SupplyGraphBar :amount="10.4" :year="'Q2 2029'" />
      <SupplyGraphBar :amount="11.6" :year="'Q2 2030'" />
      <SupplyGraphBar :amount="12.6" :year="'Q2 2031'" />
      <SupplyGraphBar :amount="13.5" :year="'Q2 2032'" />
      <SupplyGraphBar :amount="14.3" :year="'Q2 2033'" />
      <SupplyGraphBar :amount="14.9" :year="'Q2 2034'" />
      <SupplyGraphBar :amount="15.5" :year="'Q2 2035'" />
      <SupplyGraphBar :amount="15.9" :year="'Q2 2036'" />
      <SupplyGraphBar :amount="16.3" :year="'Q2 2037'" />
      <SupplyGraphBar :amount="17.7" :year="'Q2 2045'" />
      <SupplyGraphBar :amount="18.4" :year="'Q2 2061'" />
    </div>
  </section>
</template>

<script>
import SupplyGraphBar from "@/components/sections/supply_section/SupplyGraphBar.vue";
export default {
  components: {
    SupplyGraphBar
  }
}
</script>


<style lang="scss">
@use "@/assets/variables.scss" as var;
  #supply {
    position: relative;
    z-index: 1;
    background: linear-gradient(160deg, rgba(10, 17, 20, 0.58), rgba(6, 12, 15, 0.84));
    border: 1px solid var.$border-soft;
    border-radius: 0.8rem;
    padding: clamp(3rem, 5vw, 6rem);
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    box-shadow: 0 18px 48px rgba(0, 0, 0, 0.36);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 0;
      background:
        linear-gradient(90deg, rgba(2, 255, 207, 0.4), transparent 35%, rgba(245, 217, 95, 0.14) 100%) top left / 100% 1px no-repeat,
        linear-gradient(180deg, rgba(2, 255, 207, 0.045), transparent 42%);
      border-radius: inherit;
      pointer-events: none;
    }
  }

  .supply-graph {
    position: relative;
    z-index: 1;
    flex-direction: column;
    display: flex;
    gap: 1.1rem;
    padding: 0;

    > * {
      border: 1px solid var.$border-soft;
      border-radius: 0.8rem;
      background: rgba(255, 255, 255, 0.02);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
      padding: 1rem 1.1rem;
    }
  }

  .supply-header {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    h2 {
      margin: 0;
      font-size: 4.8rem;
    }
  }

  .supply-stats {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;

    div {
      padding: 1.4rem;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 0.8rem;
      background: rgba(255, 255, 255, 0.025);
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }

    span {
      color: rgba(245, 247, 251, 0.62);
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      text-transform: uppercase;
    }

    strong {
      color: var.$ascent-color;
      font-size: 1.9rem;
    }
  }

@media screen and (max-width: 748px) {
  #supply {
    padding: 3rem;

    .supply-header {
      align-items: center;
      text-align: center;

      h2 {
        font-size: 3.5rem;
      }
    }

    .supply-stats {
      grid-template-columns: 1fr;
    }
  }
}
</style>
