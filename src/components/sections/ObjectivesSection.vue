<template>
    <section id="objectives">
      <h2>
        Objectives
      </h2>
      <div class="is-animated" :class="{'fade-childs': !preRendered,}">
        <div>
          <h3>Main Objectives</h3>
          <ol>
            <li>Provide privacy on transactions / balances.</li>
            <li>Enable Smart Contracts.</li>
            <li>Scalable blockchain for daily usage.</li>
            <li>Easy to integrate for developers.</li>
          </ol>
        </div>
        <div>
          <h3>Other Objectives</h3>
          <ol>
            <li>Issue custom assets identical to the native XEL.</li>
            <li>POW algorithm designed as CPU / GPU friendly.</li>
            <li>Decentralization.</li>
            <li>Simple to use.</li>
          </ol>
        </div>
      </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#objectives {
  position: relative;
  z-index: 1;

  padding: 6rem;
  border: 1px solid var.$border-soft;
  border-radius: 2rem;
  background: linear-gradient(150deg, rgba(10, 17, 20, 0.82), rgba(6, 12, 15, 0.9));
  box-shadow: var.$glow, 0 20px 60px rgba(0, 0, 0, 0.55);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 15% 30%, rgba(2, 255, 207, 0.08), transparent 40%),
                radial-gradient(circle at 80% 10%, rgba(0, 52, 42, 0.18), transparent 40%),
                linear-gradient(180deg, rgba(10, 17, 20, 0.7) 0%, rgba(6, 12, 15, 0.9) 100%);
    z-index: 0;
    border-radius: 2.4rem;
    pointer-events: none;
  }

  h2 {
    width: 100%;
    padding-top: 2rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
  }

  > div {
    display: flex;
    gap: 6rem;
    padding-bottom: 4rem;
    align-items: stretch;
    position: relative;
    z-index: 1;
    > div {
      flex: 1;
      padding: 2.4rem;
      border: 1px solid var.$border-soft;
      border-radius: 1.6rem;
      background: linear-gradient(165deg, rgba(255, 255, 255, 0.02), rgba(2, 255, 207, 0.05));
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
    }
    ol li + li {
      margin-top: 1rem;
    }
    ol {
      padding-left: 1.8rem;
      font-size: 1.9rem;
      color: rgba(245, 247, 251, 0.85);
    }
  }
}

@media screen and (max-width: 748px) {
  #objectives {
    > div {
      flex-direction: column;
      gap: 3rem;
    }
  }
}
</style>