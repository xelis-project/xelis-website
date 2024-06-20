<template>
    <section id="network_container">
      <div id="network" class="is-animated">
        <div class="angle tl"></div>
        <div class="angle tr"></div>
        <div class="angle bl"></div>
        <div class="angle br"></div>
        <!-- <div class="bg bgbd"></div> -->
        <div class="bg bgbl"></div>
        <div class="bg bgtr"></div>
        <!-- <div class="bg bgf"></div> -->
        <h2>Network</h2>
        <ul>
          <li>Coin Name: <span>XELIS (XEL)</span></li>
          <li>Average Block Time: <span>15 seconds</span></li>
          <li>Maximum Block Size: <span>1.25 MB</span></li>
          <li>Block Reward: <span>up to ~ 1.46 XEL</span></li>
          <li>Maximum Supply: <span>18.4 million</span></li>
          <li>Minimum Transaction Fees: <span>0.0001 XEL per kB</span></li>
          <li>Atomic Units: <span>8</span></li>
          <li>Block Dev Fee: <span>10%</span></li>
        </ul>
      </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#network{
  position: relative;
  z-index: 10;
  overflow: hidden;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  padding: 11rem;
  background: black;

  &.active {
    animation: network-anim 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) forwards;
  }

  h2 {
    width: 30%;
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

@keyframes network-anim {
  0% {
    opacity: 0;
    transform: scale(50%);
  }

  100% {
    opacity: 1;
    transform: scale(100%);
  }
}

#network_container {
  position: relative;

  &::before {
    content: "";
    position: absolute;
    bottom: -50%;
    right: -20%;
    z-index: -1;
    width: calc(1060.003px / 1920px) * 100vw;
    height: 358.17px;
    background: rgba(0, 170, 150, 0.2);
    transform: rotate(346deg);
    filter: blur(95px);
    border-radius: 50%;
  }
}

#network {
  .bgbl {
    top: 84px;
    left: -458px;
    width: 815px;
    height: 815px;

    background: rgba(2, 255, 207, 0.6);
    filter: blur(225px);
  }
  .bgtr {
    $network-width: 1280px;
    $network-height: 469px;
    top: calc(-504px / $network-height) * 100%;
    left: calc(201.19px / $network-width) * 100%;
    width: calc(1696px / $network-width) * 100%;
    height: calc(685.4px / $network-height) * 100%;

    background: rgba(2, 255, 207, 0.1);
    transform: rotate(29.74deg);
    filter: blur(165px);
  }
  ul {
    list-style: none;
    li + li {
      margin-top: 1rem;
    }
  }
  li span {
    color: var.$ascent-color;
  }

  .bg {
    position: absolute;
    z-index: -1;
    border-radius: 50%;  // Most background colors are ellipse
  }
}

@media screen and (max-width: 1200px) {
  #network {
    padding: 11rem 8rem;
  }
}

@media screen and (max-width: 1000px) {
  #network {
    padding: 11rem 5rem;
    h2 {
      font-size: 4rem;
    }
  }
}


@media screen and (max-width: 900px) {
  #network {
    flex-direction: column;
    gap: 3rem;
    padding: 3rem;
    .bg {
      &.bgbl {
        top: 60%;
      }
      &.bgtr {
        $network-width: 1280px;
        $network-height: 469px;
        top: calc(-204px / $network-height) * 100vh;
        left: calc(101.19px / $network-width) * 100vw;
        width: calc(1696px / $network-width) * 100vw;
        height: calc(685.4px / $network-height) * 100%;
      }
    }
  }
  #network_container {
    &::before {
      right: -25rem;
      width: calc(3560.003px / 1920px) * 100vw;
      height: calc(3560.003px / 1920px) * 50vh
    }
  }

  .safari {
    #network {
      .bgbl {
        top: 10%;
      }
      .bgtr {
        top: -40%;
        left: 30%;
        background: rgba(2, 255, 207, 0.4);
        width: 100vw;
        height: 100%;
      }
    }

    #network_container {
      &::before {
        right: -25rem;
        width: calc(3560.003px / 1920px) * 100vw;
        height: calc(3560.003px / 1920px) * 50vh;

        background: rgba(0, 170, 150, 0.4);
        transform: rotate(346deg);
        filter: blur(95px);
      }
    }

  }
}
</style>