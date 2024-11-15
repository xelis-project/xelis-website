<template>
    <section id="socials" class="is-animated">
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
          <a href="https://youtube.com/@xelis_project" target="_blank">
            <img src="@/assets/images/youtube.svg" alt="Youtube logo" />
            Youtube
          </a>
          <a href="https://xeliscommunity.org/" target="_blank">
            <img src="@/assets/images/medium.svg" alt="Medium logo" />
            Medium
          </a>
          <a href="https://github.com/xelis-project" target="_blank">
            <img src="@/assets/images/github_2.svg" alt="GitHub logo" />
            GitHub
          </a>
          <a href="https://www.facebook.com/xeliscommunity" target="_blank">
            <img src="@/assets/images/facebook.svg" alt="Facebook logo" />
            Facebook
          </a>
          <a href="https://www.linkedin.com/company/xelis" target="_blank">
            <img src="@/assets/images/linkedin.svg" alt="LinkedIn logo" />
            LinkedIn
          </a>
          <a href="https://www.reddit.com/r/xelis/" target="_blank">
            <img src="@/assets/images/reddit.svg" alt="Reddit logo" />
            Reddit
          </a>
          <a href="https://www.instagram.com/xeliscommunity/" target="_blank">
            <img src="@/assets/images/instagram.svg" alt="Instagram logo" />
            Instagram
          </a>
          <a href="https://tiktok.com/@xeliscommunity" target="_blank">
            <img src="@/assets/images/tiktok.svg" alt="Tiktok logo" />
            Tiktok
          </a>
          <a href="https://matrix.to/#/#xelis:matrix.org" target="_blank">
            <img src="@/assets/images/matrix.svg" alt="Matrix logo" />
            Matrix
          </a>
        </div>
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

  &.active {
    animation: social-anim .5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
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

@keyframes social-anim {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0%);
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