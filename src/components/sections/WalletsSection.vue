<template>
    <section id="wallets_container">
        <h2>Resources</h2>
        <div id="wallets">
          <div class="angle tl"></div>
          <div class="angle tr"></div>
          <div class="angle bl"></div>
          <div class="angle br"></div>

          <div class="wallets-header">
            <h2>Wallets</h2>
            <p>
              The wallets are designed fore ease-of-use, to make Xelis’s technology accessible for all
            </p>
          </div>
          <div class="wallets-content">
            <div class="left item">
              <img src="@/assets/images/official_wallet.png" alt="Official Wallet" />

              <div class="left-content">
                <p>
                  CLI Wallet
                </p>
                <p>
                  Xelis’s flagship wallet. Ready for everything, from daily management tasks to smart contracts
                  deployment, privacy and DeFi
                </p>
                <div class="buttons">
                  <a class="button">
                    <button>
                      CLI Wallet
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div class="right">
              <div class="item">
                <img src="@/assets/images/gui_wallet.png" alt="GUI Wallet" />
                <div class="right-content">
                  <p>
                    GUI Wallet
                  </p>
                  <p>
                    The wallet in your browser. Get access to the latest features with a focus on DeFi
                  </p>
                  <div class="buttons">
                    <a class="button">
                      <button>
                        Chrome
                      </button>
                    </a>
                    <a class="button">
                      <button>
                        Firefox
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div class="item">
                <img src="@/assets/images/mobile_wallet.png" alt="Mobile Wallet" />
                <div class="right-content">
                  <p>
                    Mobile Wallet
                  </p>
                  <p>
                    Xelis on the go. First-class UX. Available on Android and iOS
                  </p>
                  <div class="buttons">
                    <a class="button">
                      <button>
                        Android
                      </button>
                    </a>
                    <a class="button">
                      <button>
                        iOS
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="wallets_hide">
            <div>
              <span>Soon</span>
            </div>
          </div>

        </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;


#wallets_container {
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
  #wallets {
    position: relative;
    z-index: 10;
    overflow: hidden;
    padding: 3rem 8rem;
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
    gap: 1rem;
    > div {
      flex: 1;
    }

    .item {
      display: flex;
      gap: 1rem;
      flex: 1;
      background: rgba(255, 255, 255, 0.08);
      padding: 2rem;
      border-radius: 1rem;
      img {
        width: 100%;
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
      gap: 1rem;
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
        gap: 1rem;
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
      padding: 2rem;
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