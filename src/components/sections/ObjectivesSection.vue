<template>
    <section id="objectives">
      <h2>
        Objectives
      </h2>
      <div>
        <div
          :class="{'fade': !preRendered,}"
          class="is-animated"
        >
          <h3>Main Objectives:</h3>
          <ol>
            <li>Provide privacy on transactions / balances.</li>
            <li>Enable Smart Contracts.</li>
            <li>Scalable blockchain for daily usage.</li>
            <li>Easy to integrate for developers.</li>
          </ol>
        </div>
        <div
          :class="{'fade': !preRendered,}"
          class="is-animated"
        >
          <h3>Other Objectives:</h3>
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

  h2 {
    padding-bottom: 2.5rem;
    width: 100%;
    border-bottom: 2px solid var.$white;
  }
  > div {
    display: flex;
    gap: 6rem;
    > div {
      flex: 1;
    }
    ol li + li {
      margin-top: 1rem;
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