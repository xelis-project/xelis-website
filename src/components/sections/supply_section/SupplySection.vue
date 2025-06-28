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
      <SupplyGraphBar :amount="18.3" :graphHeight="200" :year="'Q2 2061'" />
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
  #supply {
    position: relative;
    z-index: 1;
    background-color: rgb(0 0 0 / 60%);
    padding: 5vw;
    display: flex;
    flex-direction: column;

    &::before {
      content: "";
      position: absolute;
      bottom: -60%;
      left: 0%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 300vw;
      height: 800px;
      background: rgba(0, 170, 150, 0.1);
      transform: rotate(45deg);
      transform-origin: center;
      filter: blur(150px);
    }
  }

  .supply-graph {
    flex-direction: column;
    display: flex;
    gap: 1rem;

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
  }

  .supply-description {
    font-size: 1.7rem;
    margin-top: 1rem;
    color: #ffffffad;
    max-width: 500px;
  }
</style>