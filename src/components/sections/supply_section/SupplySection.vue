<template>
  <section id="supply">
    <h2>
      Supply Emission
      <div class="supply-description">Instead of halving, the reward is decreasing with each block with a maximum supply of 18.4 million.</div>
    </h2>
    <div class="supply-graph scroll-bar">
      <SupplyGraphBar :amount="2.8" :graphHeight="50" :year="'Q2 2025'" />
      <SupplyGraphBar :amount="5.2" :graphHeight="100" :year="'Q2 2026'" />
      <SupplyGraphBar :amount="7.2" :graphHeight="200" :year="'Q2 2027'" />
      <SupplyGraphBar :amount="8.9" :graphHeight="200" :year="'Q2 2028'" />
      <SupplyGraphBar :amount="10.4" :graphHeight="200" :year="'Q2 2029'" />
      <SupplyGraphBar :amount="11.6" :graphHeight="200" :year="'Q2 2030'" />
      <SupplyGraphBar :amount="12.6" :graphHeight="200" :year="'Q2 2031'" />
      <SupplyGraphBar :amount="13.5" :graphHeight="200" :year="'Q2 2032'" />
      <SupplyGraphBar :amount="14.3" :graphHeight="200" :year="'Q2 2033'" />
      <SupplyGraphBar :amount="14.9" :graphHeight="200" :year="'Q2 2034'" />
      <SupplyGraphBar :amount="15.5" :graphHeight="200" :year="'Q2 2035'" />
      <SupplyGraphBar :amount="15.9" :graphHeight="200" :year="'Q2 2036'" />
      <SupplyGraphBar :amount="16.3" :graphHeight="200" :year="'Q2 2037'" />
      <SupplyGraphBar :amount="17.7" :graphHeight="200" :year="'Q2 2045'" />
      <SupplyGraphBar :amount="18.4" :graphHeight="200" :year="'Q2 2061'" />
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
    background: linear-gradient(160deg, rgba(10, 17, 20, 0.78), rgba(6, 12, 15, 0.88));
    border: 1px solid var.$border-soft;
    border-radius: 2rem;
    padding: 5vw;
    display: flex;
    flex-direction: column;
    box-shadow: var.$glow, 0 25px 60px rgba(0, 0, 0, 0.55);
    overflow: hidden;

    &::before {
      content: "";
      position: absolute;
      bottom: -60%;
      left: 0%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 300vw;
      height: 800px;
      background: rgba(0, 170, 150, 0.16);
      transform: rotate(45deg);
      transform-origin: center;
      filter: blur(150px);
    }
  }

  .supply-graph {
    flex-direction: column;
    display: flex;
    gap: 1rem;
    padding: 1rem;

    > * {
      border: 1px solid var.$border-soft;
      border-radius: 1.2rem;
      background: rgba(255, 255, 255, 0.02);
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
      overflow: auto;
      padding-bottom: 1rem;
      height: 700px;
      gap: 1.5rem;
      justify-content: center;
    }
  }

  h2 {
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .supply-description {
    font-size: 1.6rem;
    color: rgba(245, 247, 251, 0.75);
    max-width: 640px;
  }
</style>