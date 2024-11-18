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
        <svg fill="currentColor" class="network-icon" width="800px" height="800px" viewBox="0 0 1024 1024">
          <path d="M372.288 745.792a394.048 394.048 0 0 0 113.728 102.848v-127.744a390.08 390.08 0 0 0-113.728 24.896z m-51.584 24.192a392.96 392.96 0 0 0-60.16 41.6h-1.28a390.336 390.336 0 0 0 205.696 89.6 450.24 450.24 0 0 1-144.256-131.2z m-24.704-230.016c3.968 56.768 20.096 110.208 45.696 157.696a445.696 445.696 0 0 1 144.32-32.896v-124.8h-190.08z m-56.128 0H120.96a390.4 390.4 0 0 0 98.56 233.024c22.208-19.2 46.272-36.224 71.808-50.752a445.312 445.312 0 0 1-51.456-182.272z m445.824 158.784c25.984-47.808 42.24-101.568 46.336-158.72H540.992v124.864c51.072 3.2 99.776 14.976 144.704 33.92z m50.24 24.96c24.448 14.08 47.552 30.464 68.928 48.896a390.4 390.4 0 0 0 98.176-232.576h-114.88a445.312 445.312 0 0 1-52.224 183.68z m-194.944 125.44a394.048 394.048 0 0 0 113.92-102.4 389.888 389.888 0 0 0-113.92-25.728v128.192z m23.104 51.392a390.4 390.4 0 0 0 200.704-88.96h-0.512a392.96 392.96 0 0 0-57.92-40.32 450.24 450.24 0 0 1-142.272 129.28zM341.76 326.144a389.632 389.632 0 0 0-45.76 157.824h190.016V358.976a445.696 445.696 0 0 1-144.256-32.768z m-50.368-24.576a449.216 449.216 0 0 1-71.808-50.56 390.4 390.4 0 0 0-98.56 232.96h118.848a445.312 445.312 0 0 1 51.52-182.4z m194.56-126.208A394.048 394.048 0 0 0 372.48 278.016a390.08 390.08 0 0 0 113.536 24.768V175.36z m-20.992-52.544a390.272 390.272 0 0 0-205.312 89.152h0.512c18.88 15.872 39.168 29.888 60.608 41.92a450.24 450.24 0 0 1 144.192-131.072z m189.76 154.048a394.048 394.048 0 0 0-113.728-102.08v127.808a389.952 389.952 0 0 0 113.728-25.728z m51.392-24.576a392.96 392.96 0 0 0 57.856-40.32h0.384A390.336 390.336 0 0 0 564.16 123.52a450.24 450.24 0 0 1 141.952 128.832z m25.92 231.68a389.632 389.632 0 0 0-46.528-159.168 445.568 445.568 0 0 1-144.512 33.92v125.248h191.04z m56.128 0h114.88a390.4 390.4 0 0 0-98.56-232.96 449.28 449.28 0 0 1-68.736 48.896c29.824 55.424 48.32 117.76 52.416 184.128zM512 960A448 448 0 1 1 512 64a448 448 0 0 1 0 896z" />
        </svg>
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

  .network-icon {
    position: absolute;
    opacity: .03;
    color: var.$ascent-color;
    top: -10rem;
    left: -20rem;
    z-index: -1;
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
    transform: scale(70%);
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
    font-size: 2rem;
    list-style: none;
    li + li {
      margin-top: 1.1rem;
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
    flex-direction: column;
    gap: 0;
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