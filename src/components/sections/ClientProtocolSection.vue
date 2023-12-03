<template>
    <section id="client_protocol_container"> <!-- ================= CLIENT PROTOCOL ================= -->
      <div id="client_protocol">
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
            XELIS integrate along with BlockDAG a way to accept multiple times the same TX and only execute it one time.
            Instead of excluding the whole block because we have a collision with another blockDAG branch for a TX, we
            just don't execute the TX and keep its hash.
          </p>
          <p>
            The same TX can be contained in multiple blocks only if:
          <ul class="list">
            <li>TX is not executed in stable height.</li>
            <li>TX is not included in block Tips (previous blocks).</li>
          </ul>
          </p>
          <p>
            During the generation of the DAG order (linking unique topoheight to a block hash),
            the first block being ordered will execute the TX first.
          </p>
          <p>
            This feature allows to accept others branch tips even if transactions are the same and prevent
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