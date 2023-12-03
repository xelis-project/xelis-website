<template>
    <section id="blockdag">
      <div class="title">
        <h2>BlockDAG</h2>
        <span>
          XELIS implements BlockDAG which is a more complex structure that allows multiple blocks to exist
          simultaneously. More details below.
        </span>
      </div>
      <ul class="content">
        <li
          :class="{'fade': !preRendered,}"
          class="item is-animated"
        >
          <div class="number">
            1.
          </div>
          <div class="text">
            Reduce rate of orphans blocks when miners find a block at the same time.
          </div>
        </li>
        <li
          :class="{'fade': !preRendered,}"
          class="item is-animated"
        >
          <div class="number">
            2.
          </div>
          <div class="text">
            Height is not unique anymore and can have multiple blocks.
          </div>
        </li>
        <li
          :class="{'fade': !preRendered,}"
          class="item is-animated"
        >
          <div class="number">
            3.
          </div>
          <div class="text">
            Topo Height (topological height) is the new and unique height for a block which is ordered by the DAG.
          </div>
        </li>
        <li
          :class="{'fade': !preRendered,}"
          class="item is-animated"
        >
          <div class="number">
            4.
          </div>
          <div class="text">
            Stable height is the last height in which the order of the DAG cannot changes.
          </div>
        </li>
        <li
          :class="{'fade': !preRendered,}"
          class="item is-animated"
        >
          <div class="number">
            5.
          </div>
          <div class="text">
            Differents types of blocks:
            <ul class="list">
              <li>
                Sync: Is in stable height and its the only block at its height (or only ordered block at its
                height and don't have lower cumulative difficulty than previous blocks).
              </li>
              <li>
                Side: its height is less than or equal to height of past 8 topographical blocks.
                Its block rewards are lowered to 30%.
              </li>
              <li>
                Orphaned: this block was not ordered in the DAG and has no topoheight
                (its transactions are not executed)
              </li>
            </ul>
          </div>
        </li>
        <li
          :class="{'fade': !preRendered,}"
          class="item is-animated"
        >
          <div class="number">
            6.
          </div>
          <div class="text">
            Up to 3 previous blocks (called TIPS)
            <ul class="list">
              <li>
                Circulating Supply is re-calculated each time the block is re-ordered because its based on DAG order.
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#blockdag {
  .title {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2.5rem;
    border-bottom: 2px solid var.$white;
    span {
      font-size: 2rem;
      font-weight: bold;
    }
  }
  h2 {
    margin: 0;
  }
  ul.content {
    display: flex;
    flex-wrap: wrap;
    margin-top: 4rem;
    column-gap: 4rem;
    li.item {
      display: flex;
      margin-bottom: 3rem;
      padding-bottom: 3rem;
      width: calc(50% - 2rem);
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      &:nth-last-child(1), &:nth-last-child(2) {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: 0;
      }
    }
    .number {
      margin-right: 1rem;
      width: 3rem;
      color: var.$ascent-color;
    }
    .text {
      max-width: calc(100% - 4rem);
    }
  }
}



@media screen and (max-width: 748px) {
  #blockdag {
    .title {
      gap: 1rem;
      flex-direction: column;
      align-items: flex-start;
      position: relative;
      span {
        font-size: 1.6rem;
      }

      &:before {
        top: -100%;
        left: -50%;
        width: 80vh;
        height: 200%;
        content: "";
        position: absolute;
        background: rgba(2, 255, 207, 0.25);
        transform: rotate(-110deg);
        filter: blur(165px);
      }
    }
    ul.content li.item {
      margin-bottom: 1.5rem;
      padding-bottom: 1.5rem;
      width: 100%;
      &:nth-last-child(2) {
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      }
    }
  }

  .safari #blockdag .title::before {
    top: -200%;
    left: -50%;
    filter: blur(100px);
    height: 100vh;
  }
}
</style>