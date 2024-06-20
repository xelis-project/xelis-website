<template>
    <section id="client_protocol_container"> <!-- ================= CLIENT PROTOCOL ================= -->
      <div id="client_protocol" class="is-animated">
        <div class="angle tl"></div>
        <div class="angle tr"></div>
        <div class="angle bl"></div>
        <div class="angle br"></div>
        <div class="bg bgbd"></div>
        <div class="bg bgtl"></div>
        <div class="bg bgbr"></div>
        <div class="bg bgf"></div>
        <h2>Client<br />Protocol</h2>
        <div>
          <p>
            XELIS integrates, along with BlockDAG, a method to accept multiple occurrences of the same transaction (TX) and execute it only once.
            Instead of excluding the entire block due to a collision with another BlockDAG branch for a TX,
            we simply refrain from executing the TX and retain its hash.
          </p>
          <br/>
          <p>
            The same TX can be contained in multiple blocks only if:
          <ul class="list">
            <li>TX must not be executed at a stable height.</li>
            <li>TX is not already included in the same chain branch (previous blocks).</li>
          </ul>
          </p>
          <br/>
          <p>
            During the generation of the DAG order (linking unique topoheight to a block hash),
            the first block being ordered will execute the TX first.
          </p>
          <br/>
          <p>
            This feature allows the acceptance of other branch tips even if transactions are the same and prevent
            more orphans blocks when branches are merged.
          </p>
        </div>
      </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#client_protocol_container {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -150%;
    right: 25%;
    z-index: -1;
    width: calc(1546.96px / 1920px) * 100vw;
    height: 1042.44px;
    background: rgba(0, 170, 150, 0.2);
    transform: rotate(42.19deg);
    filter: blur(300px);
    border-radius: 50%;
  }
}

#client_protocol {
  position: relative;
  z-index: 10;
  overflow: hidden;
  display: flex;
  gap: 5rem;
  justify-content: space-between;
  padding: 11rem;
  opacity: 0;

  &.active {
    animation: client-protocol-anim 1s cubic-bezier(0.680, -0.550, 0.265, 1.550) forwards;
  }

  h2 {
    width: 50%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.8);
    margin: 0.5rem 0;
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

@keyframes client-protocol-anim {
  0% {
    opacity: 0;
    transform: scale(50%);
  }

  100% {
    opacity: 1;
    transform: scale(100%);
  }
}

#client_protocol {
  $client-width: 1280px;
  $client-height: 674px;

  .bgtl {
    top: calc(-400px / $client-height) * 100%;
    left: calc(-400px / $client-width) * 100%;
    width: calc(963px / $client-width) * 100%;
    height: calc(786px / $client-height) * 100%;
    background: rgba(2, 255, 207, 0.2);
    transform: rotate(122.43deg);
    filter: blur(165px);
  }
  .bgbr {
    top: calc(201px / $client-height) * 100%;
    left: calc(826px / $client-width) * 100%;
    width: calc(548px / $client-width) * 100%;
    height: calc(548px / $client-height) * 100%;
    background: rgba(2, 255, 207, 0.6);
    filter: blur(225px);
  }
}

@media screen and (max-width: 900px) {
  #client_protocol {
    gap: 2rem;
    flex-direction: column;
    padding: 3rem;
    h2 {
      margin: 0;
      width: 100%;
      text-align: center;
      border-bottom: 0;
    }
    p {
      margin: 1rem 0;
    }

    $client-width: 1280px;
    $client-height: 674px;
    .bgf {
      display: none;
    }

    .bgbr {
      top: calc(201px / $client-height) * 100vh;
      left: calc(1026px / $client-width) * 100vw;
      width: calc(548px / $client-width) * 100vw;
      height: calc(548px / $client-height) * 100vh;
      background: rgba(2, 255, 207, 0.6);
      filter: blur(225px);
    }

    .bgtl {
      filter: blur(50px);
      left: -50%;
      height: calc(986px / $client-height) * 100%;
      background: rgba(2, 255, 207, 0.3);
      transform: rotate(70deg);
    }
  }

  #client_protocol_container {
    &::before {
      background: rgba(0, 170, 150, 0.3);
      top: -50vh;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }

}

.safari {
  $client-width: 1280px;
  $client-height: 674px;
  #client_protocol {
    .bgtl {
      filter: blur(50px);
      left: -50%;
      height: calc(986px / $client-height) * 100%;
      transform: rotate(70deg);
    }
    .bgbr {
      filter: blur(90px);
      left: calc(426px / $client-width) * 100vw;
      bottom: -60%;
      top: unset;
      background: rgba(2, 255, 207, 0.2);
      transform: rotate(65deg);
      height: calc(1048px / $client-height) * 100vh;
    }
  }

  #client_protocol_container {
    &::before {
      background: rgba(0, 170, 150, 0.45);
      filter: blur(70px);
    }
  }
}
</style>