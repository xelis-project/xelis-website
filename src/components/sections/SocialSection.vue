<template>
    <section id="socials">
      <h2>
        Socials
      </h2>
      <div>
        <div>
          <a href="https://discord.gg/z543umPUdj" target="_blank">Discord</a>
          <a href="https://t.me/xelis_io" target="_blank">Telegram</a>
          <a href="https://twitter.com/xelis_project" target="_blank">Twitter / X</a>
        </div>
        <!-- <div>
          <a>Linkedin</a>
          <a>Telegram</a>
          <a>Instagram</a>
        </div> -->
      </div>
    </section>
</template>

<style lang="scss">
@use "@/assets/variables.scss" as var;

#socials {
  display: flex;
  gap: 3rem;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    width: 100vw;
    background-repeat: no-repeat;
    bottom: -75rem;
    left: -19.6rem;
    height: 150rem;
    background-image: url("@/assets/CircuitBas.svg");
  }

  h2 {
    width: 40%;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    > div {
      display: flex;
      justify-content: space-around;
      width: 100%;
      + div {
        margin-top: 1rem;
      }
    }
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
  }
}

@media screen and (max-width: 748px) {
  #socials {
    flex-direction: column;
    &::after {
      bottom: -51rem;
      width: 74.8rem;
      height: 74.8rem;
      background-size: contain;
      left: -10rem;
    }
    > div {
      width: 100%;
    }
    a {
      font-size: 1.6rem;
    }
    h2 {
      width: 100%;
    }
  }
}
</style>