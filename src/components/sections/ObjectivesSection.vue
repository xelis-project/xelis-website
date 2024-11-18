<template>
    <section id="objectives">
      <div class="obg"></div>
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

  .obg {
    position: absolute;
    background: #0808082e;
    width: 200%;
    height: 100%;
    left: -50%;
    backdrop-filter: blur(5px);
    z-index: -1;
  }

  h2 {
    width: 100%;
    padding-top: 10rem;
  }

  > div {
    display: flex;
    gap: 6rem;
    padding-bottom: 10rem;
    > div {
      flex: 1;
    }
    ol li + li {
      margin-top: 1rem;
    }
    ol {
      padding-left: 1.8rem;
      font-size: 2rem;
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