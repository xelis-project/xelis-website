<template>
  <footer>
    <CircuitImg />
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-branding">
          <div id="bottom_logo">
            <img src="@/assets/logo.svg" />
            <div>XELIS</div>
          </div>
          <p class="footer-description">
            The world's first BlockDAG with Privacy, Speed, Scalability, and Smart Contracts.
          </p>
        </div>

        <div class="footer-links">
          <h4>Resources</h4>
          <div class="link-group">
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
      </div>

      <div class="footer-disclaimer">
        <p>
          Use our tools and software at your own risk. We will not take any responsibility in the way it is used.
        </p>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          © {{  new Date().getFullYear() }} XELIS Project
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CircuitImg from "@/components/CircuitImg.vue";

export default {
    name: "NodesSection",
    components: {
        CircuitImg
    },
}
</script>

<style lang="scss">
@use "@/assets/variables.scss" as var;

footer {
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 6rem calc(var.$spacing-body * 1.2);
  font-size: 1.8rem;
  border-top: 1px solid var.$border-strong;
  background: linear-gradient(160deg, rgba(10, 17, 20, 0.9), rgba(6, 12, 15, 0.92));
  backdrop-filter: blur(4px);
  overflow: hidden;
  box-shadow: var.$glow, 0 -20px 60px rgba(0, 0, 0, 0.45);

  .circuit {
    z-index: -1;
    position: absolute;
    opacity: .3;
    bottom: 0;
    left: -19.6rem;
    height: 150rem;
    transform: scale3d(2, 2, 1);
  }

  .footer-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .footer-top {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    padding-bottom: 3rem;
    border-bottom: 1px solid var.$border-soft;
  }

  .footer-branding {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    #bottom_logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      font-size: 2.4rem;
      font-weight: bold;

      img {
        width: 3rem;
        height: 3rem;
      }
    }

    .footer-description {
      font-size: 1.6rem;
      color: rgba(245, 247, 251, 0.75);
      line-height: 2.4rem;
      margin: 0;
    }
  }

  .footer-links {
    h4 {
      font-size: 1.8rem;
      color: var.$ascent-color;
      margin: 0 0 1.5rem 0;
      letter-spacing: 0.05em;
    }

    .link-group {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      a {
        font-size: 1.6rem;
        color: rgba(245, 247, 251, 0.85);
        transition: color 0.2s ease, text-shadow 0.2s ease;

        &:hover {
          color: var.$ascent-color;
          text-shadow: 0 0 16px rgba(2, 255, 207, 0.35);
        }
      }
    }
  }

  .footer-disclaimer {
    padding: 2rem;
    border: 1px solid var.$border-soft;
    border-radius: 1.2rem;
    background: rgba(255, 255, 255, 0.02);

    p {
      font-size: 1.4rem;
      color: rgba(245, 247, 251, 0.65);
      margin: 0;
      line-height: 2rem;
    }
  }

  .footer-bottom {
    display: flex;
    justify-content: center;

    .copyright {
      font-size: 1.4rem;
      color: rgba(245, 247, 251, 0.5);
    }
  }
}

@media screen and (max-width: 1200px) {
  footer {
    .footer-top {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
}

@media screen and (max-width: 900px) {
  footer {
    padding: 4rem 3rem;

    .footer-branding {
      #bottom_logo {
        font-size: 1.8rem;

        img {
          width: 2.4rem;
          height: 2.4rem;
        }
      }

      .footer-description {
        font-size: 1.4rem;
      }
    }

    .footer-links {
      h4 {
        font-size: 1.5rem;
      }

      .link-group a {
        font-size: 1.4rem;
      }
    }

    .footer-disclaimer p {
      font-size: 1.3rem;
    }
  }
}

@media screen and (max-width: 748px) {
  footer {
    padding: 3rem 2rem;

    .footer-top {
      gap: 2rem;
      padding-bottom: 2rem;
    }

    .footer-branding {
      gap: 1.5rem;
    }

    .footer-links {
      h4 {
        font-size: 1.3rem;
      }

      .link-group {
        gap: 0.8rem;

        a {
          font-size: 1.3rem;
        }
      }
    }

    .footer-disclaimer {
      padding: 1.5rem;

      p {
        font-size: 1.2rem;
      }
    }
  }
}
</style>