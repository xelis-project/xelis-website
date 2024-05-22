<template>
  <a class="exchange-box" target="_blank" :href="link">
    <div class="exchange-box-title">
      <img alt="TradeOgre logo" :src="logo_img" />
      <div>{{ name }}</div>
    </div>
    <img class="exchange-box-img" alt="TradeOgre markets" :src="market_img" />
  </a>
</template>

<script>
export default {
  name: "ExchangeBox",
  props: ["name", "link", "logo_img", "market_img"],
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

.exchange-box {
  min-width: 250px;
  max-width: 250px;
  padding: 1em;
  border: thin solid var.$ascent-color;
  color: var.$ascent-color;
  border-radius: .5em;
  display: block;
  opacity: .6;
  transition: .25s all;

  .exchange-box-title {
    display: flex;
    gap: .5em;
    align-items: center;
    padding-bottom: 1em;
    font-weight: bold;
    font-size: 1.2em;

    img {
      width: 30px;
    }
  }

  .exchange-box-img {
    width: 100%;
  }

  &:hover {
    transform: scale(.98);
    opacity: 1;
  }
}

@media screen and (max-width: 748px) {
  .exchange-box {
    background: black;
  }
}
</style>