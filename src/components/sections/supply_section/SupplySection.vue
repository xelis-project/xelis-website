<template>
  <section id="supply">
    <div class="supply-graph scroll-bar">
      <div class="supply-title">
        Supply Emission
        <div class="supply-description">Instead of halving, the reward is decreasing with each block with a maximum supply of 18.4 million.</div>
      </div>
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
    align-items: center;
  }

  .supply-graph {
    display: flex;
    gap: 1.5rem;
    overflow: auto;
    max-width: 100%;
    position: relative;
    padding-bottom: 1rem;
  }

  .supply-title {
    font-family: "Helios Bold";
    font-size: 3rem;
    position: absolute;
  }

  .supply-description {
    font-size: 1.7rem;
    margin-top: 0.5rem;
    color: #ffffffad;
    max-width: 500px;
  }
</style>