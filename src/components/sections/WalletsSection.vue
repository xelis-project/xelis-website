<template>
    <section id="wallets">
        <h2>Resources</h2>
        <div id="wallets_container">
          <div class="angle tl"></div>
          <div class="angle tr"></div>
          <div class="angle bl"></div>
          <div class="angle br"></div>

          <div class="wallets-header">
            <h2>Wallets</h2>
            <p>
              Designed for ease-of-use and make Xelis more accessible for everyone.
            </p>
          </div>
          <div class="wallets-content">
            <div class="left item">
              <img src="@/assets/images/genesix_wallet.png" alt="Genesix Wallet" />
              <div class="left-content">
                <p>
                  Genesix Wallet
                </p>
                <p>
                  The main graphical interface wallet. Can be used on all major operating systems and mobile devices. 
                </p>
                <div>Not available on app stores yet.</div>
                <div class="buttons">
                  <a class="button" target="_blank" href="https://github.com/xelis-project/xelis-genesix-wallet/releases">
                    <button>
                      <img src="@/assets/images/github.svg" alt="Github logo" />
                      Releases
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="item">
                <img src="@/assets/images/cli_wallet.png" alt="CLI wallet" />
                <div class="right-content">
                  <p>
                    CLI Wallet
                  </p>
                  <p>
                    The command line interface wallet. If you're an advanced user or prefer a minimalistic interface.
                  </p>
                  <div class="buttons">
                    <a class="button" target="_blank" href="https://github.com/xelis-project/xelis-blockchain/releases">
                      <button>
                        <img src="@/assets/images/github.svg" alt="Github logo" />
                        Releases
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src="@/assets/images/genesix_wallet_web.png" alt="Web wallet" />
                <div class="right-content">
                  <p>
                    Web Wallet (Genesix)
                  </p>
                  <p>
                    The wallet from your browser. Quickly access your funds without the need to download an application.
                  </p>
                  <div class="buttons">
                    <a class="button" target="_blank" href="https://wallet.xelis.io">
                      <button>
                        <img src="@/assets/images/browser.svg" alt="Browser logo" />
                        Open
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--
          <div id="wallets_hide">
            <div>
              <span>Soon</span>
            </div>
          </div>
          -->
        </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#wallets {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -30%;
    right: -30%;
    z-index: -1;
    width: calc(1060.003px / 1920px) * 100vw;
    height: calc(760.003px / 1920px) * 100vw;
    background: rgba(0, 170, 150, 0.2);
    transform: rotate(-150deg);
    filter: blur(55px);
    border-radius: 50%;
  }

  h2 {
    text-align: center;
  }
  #wallets_container {
    position: relative;
    z-index: 10;
    overflow: hidden;
    padding: 3rem 8rem 10rem 8rem;
    background: black;
    &::before {
      content: "";
      position: absolute;
      top: -30%;
      left: -30%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 100vw;
      height: calc(760.003px / 1920px) * 100vw;
      background: rgba(0, 170, 150, 0.2);
      transform: rotate(-150deg);
      filter: blur(55px);
      border-radius: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -50%;
      right: -50%;
      z-index: -1;
      width: calc(1060.003px / 1920px) * 100vw;
      height: calc(760.003px / 1920px) * 100vw;
      background: rgba(0, 170, 150, 0.2);
      transform: rotate(-150deg);
      filter: blur(80px);
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
  .wallets-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10rem;
  }
  .wallets-content {
    display: flex;
    gap: 2rem;
    > div {
      flex: 1;
    }

    .item {
      display: flex;
      gap: 2rem;
      flex: 1;
      background: rgba(255, 255, 255, 0.08);
      padding: 2rem;
      border-radius: 1rem;
      img {
        max-width: 65%;
        object-fit: cover;
        border-radius: 1rem;
        width: 100%;
      }
      p:first-of-type {
        font-size: 1.3em;
        font-weight: bold;
      }
      p:last-of-type {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    .left {
      &.item {
        flex-direction: column;
      }
      .left-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      .item {
        img {
          max-width: 45%;
        }
        .right-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1rem;
          height: 100%;
        }
      }
    }
    .buttons {
      flex-wrap: wrap;
      display: flex;
      gap: 0.5rem;
    }
    .button {
      button {
        display: flex;
        gap: 1rem;

        img {
          max-width: 20px !important;
        }
      }
    }
  }
}

#wallets_hide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  font-size: 10rem;
  color: white;
  font-weight: bold;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  div {
    position: absolute;
    top: 50%;
    left: 50%;
    span {
      display: block;
      transform: rotate(-45deg);
    }
    transform: translate(-60%, -60%);
  }
}

@media screen and (max-width: 1100px) {
  #wallets_container {
    h2 {
      margin: 2rem 0 6rem 0;
    }
    .wallets-header {
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 5rem;
    }
    .item {
      align-items: center;
    }
    .wallets-content {
      flex-direction: column;

      .left {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        &.item {
          flex-direction: row;
          img {
            max-width: 45%;
          }
          .right-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            height: 100%;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 748px) {
  #wallets_container {
    &::before {
      top: -10%;
      right: -50%;
      z-index: -1;
      width: 150%;
      height: calc(1560.003px / 1920px) * 100vw;
      background: rgba(0, 170, 150, 0.2);
      transform: rotate(0deg);
    }

    #wallets {
      padding: 2rem 2em 3em 2em;
      &::before {
        top: -75%;
        left: -25%;
        width: 200%;
        height: 100%;
        transform: rotate(-160deg);
        background: rgba(0, 170, 150, 0.2);
      }
      &::after {
        bottom: -10%;
        right: -30%;
        width: calc(1060.003px / 1920px) * 100vw;
        height: 100%;
        background: rgba(0, 170, 150, 0.2);
        transform: rotate(10deg);
      }
      h2 {
        margin-bottom: 2rem;
      }
      img {
        max-width: 100%;
      }
      .item, .left.item {
        flex-direction: column;
      }

      .wallets-header p {
        text-align: center;
      }

      .left-content, .right-content {
        gap: 2rem;
      }

      .buttons {
        .button {
          flex: 1;
          display: flex;
          button {
            flex: 1;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>