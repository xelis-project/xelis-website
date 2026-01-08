<template>
    <section id="socials" class="is-animated">
      <div class="socials-shell">
        <div class="socials-header">
          <h2>Connect with Us</h2>
          <p>Join the XELIS community across all platforms</p>
        </div>

        <div class="socials-grid">
          <a href="https://discord.xelis.io/" target="_blank" class="social-link">
            <div class="social-icon">
              <img src="@/assets/images/discord.svg" alt="Discord logo" />
            </div>
            <span>Discord</span>
          </a>
          <a href="https://t.me/xelis_io" target="_blank" class="social-link">            
            <div class="social-icon">
              <img src="@/assets/images/telegram.svg" alt="Telegram logo" />
            </div>
            <span>Telegram</span>
          </a>
          <a href="https://twitter.com/xelis_project" target="_blank" class="social-link">
            <div class="social-icon">
              <img src="@/assets/images/x.svg" alt="Twitter / X logo" />
            </div>
            <span>Twitter / X</span>
          </a>
          <a href="https://youtube.com/@xelis_project" target="_blank" class="social-link">
            <div class="social-icon">
              <img src="@/assets/images/youtube.svg" alt="Youtube logo" />
            </div>
            <span>Youtube</span>
          </a>
          <a href="https://github.com/xelis-project" target="_blank" class="social-link">
            <div class="social-icon">
              <img src="@/assets/images/github_2.svg" alt="GitHub logo" />
            </div>
            <span>GitHub</span>
          </a>
          <a href="https://www.reddit.com/r/xelis/" target="_blank" class="social-link">
            <div class="social-icon">
              <img src="@/assets/images/reddit.svg" alt="Reddit logo" />
            </div>
            <span>Reddit</span>
          </a>
          <a href="https://matrix.to/#/#xelis:matrix.org" target="_blank" class="social-link">
            <div class="social-icon">
              <img src="@/assets/images/matrix.svg" alt="Matrix logo" />
            </div>
            <span>Matrix</span>
          </a>
        </div>
      </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#socials {
  position: relative;
  z-index: 1;
  padding: 6rem;
  border: 1px solid var.$border-soft;
  border-radius: 2rem;
  background: linear-gradient(150deg, rgba(10, 17, 20, 0.82), rgba(6, 12, 15, 0.9));
  box-shadow: var.$glow, 0 20px 60px rgba(0, 0, 0, 0.55);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 15% 30%, rgba(2, 255, 207, 0.08), transparent 40%),
                radial-gradient(circle at 80% 10%, rgba(0, 52, 42, 0.18), transparent 40%),
                linear-gradient(180deg, rgba(10, 17, 20, 0.7) 0%, rgba(6, 12, 15, 0.9) 100%);
    z-index: 0;
    border-radius: 2rem;
    pointer-events: none;
  }

  &.active {
    animation: social-anim .5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  }

  .socials-shell {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
  }

  .socials-header {
    text-align: center;

    h2 {
      margin: 0 0 1rem 0;
      font-size: 4.8rem;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 1.8rem;
      color: rgba(245, 247, 251, 0.75);
    }
  }

  .socials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2rem;
    width: 100%;
    max-width: 1000px;
  }

  .social-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    padding: 2.4rem;
    border: 1px solid var.$border-soft;
    border-radius: 1.8rem;
    background: linear-gradient(165deg, rgba(255, 255, 255, 0.02), rgba(2, 255, 207, 0.05));
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    transition: transform 0.2s ease, border 0.2s ease, box-shadow 0.2s ease;
    text-decoration: none;
    color: var.$white;

    &:hover {
      transform: translateY(-4px);
      border: 1px solid var.$border-strong;
      box-shadow: var.$glow, 0 15px 40px rgba(0, 0, 0, 0.5);

      .social-icon {
        transform: scale(1.1);
      }

      span {
        color: var.$ascent-color;
      }
    }

    span {
      font-size: 1.8rem;
      font-weight: 600;
      letter-spacing: 0.02em;
      transition: color 0.2s ease;
    }
  }

  .social-icon {
    width: 4.8rem;
    height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.2rem;
    background: rgba(2, 255, 207, 0.1);
    transition: transform 0.2s ease;

    img {
      width: 60%;
      height: 60%;
      object-fit: contain;
      filter: brightness(0.9);
    }
  }
}

@keyframes social-anim {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 748px) {
  #socials {
    padding: 3rem;

    .socials-header {
      h2 {
        font-size: 3.5rem;
      }

      p {
        font-size: 1.5rem;
      }
    }

    .socials-grid {
      grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
      gap: 1.5rem;
    }

    .social-link {
      padding: 2rem;

      span {
        font-size: 1.5rem;
      }
    }

    .social-icon {
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>