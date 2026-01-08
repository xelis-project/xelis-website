<template>
    <section id="blockdag">
      <div class="title">
        <h2>BlockDAG</h2>
        <span>
          Provide scalability by using a DAG structure instead of a linear blockchain.
          Up to several chains in parallel, each block can have multiple parents.
        </span>
      </div>
      <ul class="content is-animated" :class="{'fade-childs': !preRendered,}">
        <li class="item is-animated">
          <div class="number">
            1.
          </div>
          <div class="text">
            Reduce the rate of orphan's blocks when miners find a block at the same time.
            Instead of choosing one block, both blocks are included in the DAG. 
          </div>
        </li>
        <li class="item is-animated">
          <div class="number">
            2.
          </div>
          <div class="text">
            Height is not unique anymore and can have multiple blocks.
          </div>
        </li>
        <li class="item is-animated">
          <div class="number">
            3.
          </div>
          <div class="text">
            Topo Height (topological height) is the new and unique height for a block which is ordered by the DAG.
          </div>
        </li>
        <li class="item is-animated">
          <div class="number">
            4.
          </div>
          <div class="text">
            <ul class="list">
              <li>
                Stable height is the last height in which the order of the DAG cannot change.
                No more blocks can be added before this height.
              </li>
              <li>
                Best chain is selected by the highest cumulative difficulty.
              </li>
              <li>
                The cumulative difficulty is the sum of the difficulties of all previous blocks in the best chain up to this block.
              </li>
            </ul>
          </div>
        </li>
        <li class="item is-animated">
          <div class="number">
            5.
          </div>
          <div class="text">
            Different types of blocks:
            <ul class="list">
              <li>
                <span class="keyword">Sync:</span> It is at a stable height and is the only block at its height 
                (or the only ordered block at this height and doesn't have a lower cumulative difficulty than previous blocks).
              </li>
              <li>
                <span class="keyword">Side:</span> Its height is less than or equal to the height of the past 8 topographical blocks.
                Its block rewards are reduced to 30%.
              </li>
              <li>
                <span class="keyword">Orphaned:</span> This block was not ordered in the DAG and has no topographical height (it's transactions are not executed).
              </li>
            </ul>
          </div>
        </li>
        <li class="item is-animated">
          <div class="number">
            6.
          </div>
          <div class="text">
            Up to 3 previous blocks (called TIPS)
            <ul class="list">
              <li>
                Circulating Supply is re-calculated each time the block is reordered because it is based on DAG order.
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
    border-radius: 2rem;
    pointer-events: none;
  }

  .title {
    display: flex;
    gap: 4rem;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 3rem;
    border-bottom: 1px solid var.$border-strong;
    position: relative;
    z-index: 1;

    span {
      font-size: 2rem;
      font-weight: 500;
      color: rgba(245, 247, 251, 0.85);
      line-height: 3rem;
    }
  }
  h2 {
    margin: 0;
    position: relative;
    z-index: 1;
  }
  ul.content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
    z-index: 1;

    li.item {
      display: flex;
      gap: 1.5rem;
      padding: 2rem;
      border: 1px solid var.$border-soft;
      border-radius: 1.6rem;
      background: linear-gradient(165deg, rgba(255, 255, 255, 0.02), rgba(2, 255, 207, 0.05));
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
      transition: transform 0.2s ease, border 0.2s ease;

      &:hover {
        transform: translateY(-2px);
        border: 1px solid var.$border-strong;
        box-shadow: var.$glow, inset 0 1px 0 rgba(255, 255, 255, 0.04);
      }
    }
    .number {
      flex-shrink: 0;
      width: 2.4rem;
      height: 2.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #041414;
      background: var.$ascent-color;
      border-radius: 50%;
      font-weight: bold;
      font-size: 1.4rem;
    }
    .text {
      flex: 1;
      font-size: 1.6rem;
      color: rgba(245, 247, 251, 0.82);
      line-height: 2.4rem;
    }

    .keyword {
      color: var.$ascent-color;
      font-weight: 600;
    }
  }
}



@media screen and (max-width: 748px) {
  #blockdag {
    padding: 3rem;

    .title {
      gap: 1.5rem;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 2rem;

      span {
        font-size: 1.5rem;
        line-height: 2.4rem;
      }
    }

    ul.content {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      margin-top: 2rem;

      li.item {
        padding: 1.5rem;
      }
    }
  }
}
</style>