<template>
    <section id="objectives">
      <div class="obg">
        <svg width="800px" height="800px" viewBox="0 0 16 16" fill="currentColor">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM6 8C6 6.89543 6.89543 6 8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8Z" />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8Z" />
        </svg>
      </div>
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
    overflow: hidden;

    svg {
      position: absolute;
      z-index: -1;
      opacity: .04;
      top: 0rem;
      left: 0rem;
      color: var.$ascent-color;
    }
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