<template>
  <footer>
    <div>
      <div id="bottom_logo">
        <img src="@/assets/logo.svg" />
        <div>XELIS</div>
      </div>
      <div>
        <div class="bottom-menu">
          <div>
            <a href="#objectives">About</a>
            <a href="#network">Network</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#socials">Socials</a>
          </div>
          <div>
            <a href="https://docs.xelis.io/" target="_blank">
              Documentation
            </a>
            <a href="https://explorer.xelis.io" target="_blank">
              Block Explorer
            </a>
            <a href="https://explorer.xelis.io/dag" target="_blank">
              DAG Viewer
            </a>
            <a href="https://github.com/xelis-project" target="_blank">
              GitHub
            </a>
          </div>
        </div>
        <p>
          XELIS is a private blockDAG with Homomorphic Encryption and Smart Contracts.<br/>
          Use our tools and software at your own risk, we will not take any responsibility in the way it is used.
        </p>
      </div>
    </div>
    <div class="copyright">
      <div>
        © 2024 Copyright
      </div>
      <div>
        Website designed by
        <a href="https://exactly.digital/" target="_blank">
          exactly.digital
        </a>
        & integrated by
        <a href="https://github.com/HectoFR" target=" _blank">
          HectoFR
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

footer {
  position: relative;
  padding: 15rem calc(var.$spacing-body * 1.5);
  font-size: 1.5rem;
  border-top: 1px solid #02FFCF;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);

  margin: 0 calc(var.$spacing-body * -1);

  img {
    width: 230px;
  }

  > div:first-child {
    display: flex;
    justify-content: space-between;
    padding-bottom: 4rem;
    border-bottom: 2px solid rgba(255, 255, 255, 0.1);
    > div:last-child {
      flex: 1;
      max-width: 50%;
    }
  }

  p {
    font-size: 1.5rem;
    margin-top: 4rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .bottom-menu {
    > div {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      text-align: left;
      &:first-child {
        margin-bottom: 2.5rem;
      }
      a {
        width: 25%;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    opacity: 0.5;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
}

@media screen and (max-width: 1920px) {
  footer {
    margin: 0 calc(var.$spacing-body * -1.3);
    // margin-top: 26rem;
  }
}

@media screen and (max-width: 1600px) {
  footer > div:first-child > div:last-child {
    max-width: 60%;
  }

  footer .bottom-menu > div {
    gap: 0.5rem;
    a {
      width: unset;
      flex: 1;
    }
  }
}

@media screen and (max-width: 900px) {
  footer {
    padding: 5rem 4rem;
    margin: 0 calc(var.$spacing-body * -0.2);
    backdrop-filter: blur(0.2px);
    background-color: rgba(0, 0, 0, 0.5);

    #bottom_logo {
      margin-bottom: 4rem;
      font-size: 2rem;
      img {
        width: 20px;
        height: 20px;
      }
    }

    &::before {
      background-position: 0rem -26rem;
      background-size: 130% 100%;
    }

    > div:first-child {
      flex-direction: column;
      > div:last-child {
        max-width: 100%;
      }
    }

    .bottom-menu {
      > div {
        gap: 1rem;
        flex-direction: row;
        justify-content: center;
        a {
          flex: unset;
        }
        &:last-child {
          flex-direction: row-reverse;
          a {
            width: 41%;
            width: calc(50% - 0.5rem);
            &:nth-child(2n) {
              text-align: right;
            }
          }
        }
        a {
          width: unset;
        }
      }
    }

    p {
      text-align: center;
    }

    .copyright {
      gap: 1rem;
      flex-direction: column;
      text-align: center;
    }
  }
}

@media screen and (max-width: 900px) {
  footer.safari {
    backdrop-filter: blur(0.2px);
    background-color: rgba(0, 0, 0, 0.5);
  }
}
@media screen and (max-width: 748px) {
  footer.safari {
    backdrop-filter: blur(0.2px);
    background-color: rgba(0, 0, 0, 0.2);
  }
}

</style>