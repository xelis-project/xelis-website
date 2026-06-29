<template>
    <section id="objectives">
      <div class="objectives-header">
        <p class="section-kicker">Design objectives</p>
        <h2>Built for private applications at everyday scale</h2>
        <p class="section-subtitle">
          XELIS keeps the product goals close to the protocol: confidential balances, programmable assets, open participation, and tooling that developers can actually integrate.
        </p>
      </div>
      <div class="objectives-grid is-animated" :class="{'fade-childs': !preRendered,}">
        <article>
          <span>01</span>
          <h3>Private transfer</h3>
          <p>Provide privacy on transactions and balances without making privacy a separate mode.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Smart contracts</h3>
          <p>Enable decentralized programs through XVM and SILEX while keeping the network focused on confidential execution.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Daily scalability</h3>
          <p>Use BlockDAG architecture and fast block flow for practical everyday usage.</p>
        </article>
        <article>
          <span>04</span>
          <h3>Developer access</h3>
          <p>Keep integration simple for wallets, services, apps, and protocol tooling.</p>
        </article>
        <article>
          <span>05</span>
          <h3>Native assets</h3>
          <p>Issue custom assets that behave like native XEL across compatible services.</p>
        </article>
        <article>
          <span>06</span>
          <h3>Open mining</h3>
          <p>Use a POW algorithm designed to remain CPU and GPU friendly.</p>
        </article>
      </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#objectives {
  position: relative;
  z-index: 1;
  padding: clamp(3rem, 5vw, 6rem);
  border: 1px solid var.$border-soft;
  border-radius: 0.8rem;
  background: linear-gradient(150deg, rgba(10, 17, 20, 0.58), rgba(6, 12, 15, 0.82));
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.36);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
                linear-gradient(90deg, rgba(2, 255, 207, 0.38), transparent 35%, rgba(245, 217, 95, 0.16) 100%) top left / 100% 1px no-repeat,
                linear-gradient(180deg, rgba(2, 255, 207, 0.045), transparent 42%);
    z-index: 0;
    border-radius: inherit;
    pointer-events: none;
  }

  .objectives-header {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    max-width: 92rem;
    margin-bottom: 4rem;
    position: relative;
    z-index: 1;

    h2 {
      margin: 0;
    }
  }

  .objectives-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
    position: relative;
    z-index: 1;

    article {
      min-height: 20rem;
      padding: 2.4rem;
      border: 1px solid var.$border-soft;
      border-radius: 0.8rem;
      background: linear-gradient(165deg, rgba(255, 255, 255, 0.025), rgba(2, 255, 207, 0.04));
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 14px 34px rgba(0, 0, 0, 0.24);
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      span {
        color: rgba(2, 255, 207, 0.7);
        font-weight: 800;
        font-size: 1.2rem;
        letter-spacing: 0.14em;
      }

      h3 {
        margin: 0;
        letter-spacing: 0.04em;
      }

      p {
        color: rgba(245, 247, 251, 0.78);
        line-height: 1.55;
      }
    }
  }
}

@media screen and (max-width: 1100px) {
  #objectives .objectives-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media screen and (max-width: 748px) {
  #objectives {
    padding: 3rem;

    .objectives-header {
      align-items: center;
      text-align: center;
    }

    .objectives-grid {
      grid-template-columns: 1fr;

      article {
        min-height: auto;
        padding: 2rem;
      }
    }
  }
}
</style>
