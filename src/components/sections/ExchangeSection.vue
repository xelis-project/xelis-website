<template>
    <section id="exchanges_container">
        <div id="exchanges">
          <div class="angle tl"></div>
          <div class="angle tr"></div>
          <div class="angle bl"></div>
          <div class="angle br"></div>

          <div class="exchanges-header">
            <h2>Exchanges</h2>
          </div>
          <div class="exchanges-content">
            Coming Soon...
          </div>
        </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#exchanges_container {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    right: -50%;
    z-index: -1;
    width: calc(1060.003px / 1920px) * 100vw;
    height: calc(860.003px / 1920px) * 100vw;
    background: rgba(0, 170, 150, 0.2);
    transform: rotate(-120deg);
    filter: blur(90px);
    border-radius: 50%;
  }

  h2 {
    margin-top: 0;
  }

  #exchanges {
    background: black;
    position: relative;
    z-index: 10;
    overflow: hidden;
    text-align: center;
    padding: 6rem 8rem;

    &::before {
      content: "";
      position: absolute;
      bottom: -100%;
      right: 10%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 100vw;
      height: calc(360.003px / 1920px) * 100vw;
      background: rgba(0, 170, 150, 0.3);
      transform: rotate(0deg);
      filter: blur(90px);
      border-radius: 50%;
    }

    .angle {
      position: absolute;
      width: 30px;
      height: 30px;
      border: 1px solid var.$ascent-color;
      &.tl {
        top: 0;
        left: 0;
        border-right: 0;
        border-bottom: 0;
      }
      &.tr {
        top: 0;
        right: 0;
        border-left: 0;
        border-bottom: 0;
      }
      &.bl {
        bottom: 0;
        left: 0;
        border-top: 0;
        border-right: 0;
      }
      &.br {
        right: 0;
        bottom: 0;
        border-top: 0;
        border-left: 0;
      }
    }
  }
}

@media screen and (max-width: 748px) {
  #exchanges_container {
    #exchanges {
      padding: 5rem 1rem;

      &::before {
        bottom: 0;
        right: unset;
        left: 0;
        width: 100%;
        height: 50%;
        background: rgba(0, 170, 150, 0.7);
      }
    }
  }
}
</style>