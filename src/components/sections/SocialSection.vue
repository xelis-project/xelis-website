<template>
    <section id="socials">
      <h2>
        Socials
      </h2>
      <div>
        <div>
          <a href="https://discord.gg/xelis" target="_blank">
            <img src="@/assets/images/discord.svg" alt="Github logo" />
            Discord
          </a>
          <a href="https://t.me/xelis_io" target="_blank">            
            <img src="@/assets/images/telegram.svg" alt="Telegram logo" />
            Telegram
          </a>
          <a href="https://twitter.com/xelis_project" target="_blank">
            <img src="@/assets/images/x.svg" alt="Twitter / X logo" />
            Twitter / X
          </a>
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
  z-index: 1;

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
      gap: 3rem;
      flex-wrap: wrap;

      + div {
        margin-top: 1rem;
      }
    }
  }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    display: flex;
    gap: 2rem;
    align-items: center;
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