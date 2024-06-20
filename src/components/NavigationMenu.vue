<template>
  <div>
    <nav>
      <ul>
        <li id="logo">
          <router-link :to="{name: 'home'}">
            <img src="@/assets/logo.svg" />
            <div>
              XELIS
            </div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home', hash: '#objectives'}">
            About
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home', hash: '#network'}">
            Network
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home', hash: '#supply'}">
            Supply
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home', hash: '#roadmap'}">
            Roadmap
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'home', hash: '#socials'}">
            Socials
          </router-link>
        </li>
        <li>
          <router-link
            :to="{name: 'resources'}"
          >
            Resources
          </router-link>
        </li>
        <li>
          <a href="https://docs.xelis.io/" target="_blank">
            Documentation
          </a>
        </li>
        <li id="burger_menu">
          <button>
            <span></span>
          </button>
        </li>
      </ul>
    </nav>
    <div id="mobile_menu">
        <ul>
          <li>
            <router-link :to="{name: 'home', hash: '#objectives'}">
              About
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home', hash: '#network'}">
              Network
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home', hash: '#roadmap'}">
              Roadmap
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'home', hash: '#socials'}">
              Socials
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources'}">
              Resources
            </router-link>
          </li>
          <li>
            <a href="https://docs.xelis.io/" target="_blank">
              Documentation
            </a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script >
export default {
    name: "NavigationMenu",
    mounted() {
      // MENU
      document.querySelector("#burger_menu button").addEventListener("click", () => {
        document.body.classList.toggle("menu-open");
      });

      document.querySelectorAll("#mobile_menu a").forEach((a) => {
        a.addEventListener("click", () => {
          document.body.classList.toggle("menu-open");
        })
      });
    }
}
</script>

<style lang="scss">
 // ============ MENU =======

#burger_menu {
  display: none;
  position: relative;
  button {
    background-color: transparent;
    border: none;
    width: 3rem;
    height: 3rem;
  }
  button span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: 3rem;
    height: 0.8rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    &:before, &:after {
      content: "";
      position: absolute;
      right: 0;
      display: block;
      height: 1px;
      background-color: white;
      transition: transform 0.3s ease-out;
    }
    &:before {
      top: 0;
      width: 2.3rem;
    }
    &:after {
      bottom: 0;
      width: 3.2rem;
    }
  }
}

.menu-open {
  height: 100dvh;
  overflow: hidden;
  #mobile_menu {
    top: 50%;
    left: 50%;
    display: flex;
    visibility: visible;
    opacity: 1;
  }
  #hero {
    display: none;
  }

  #burger_menu button span:before {
    width: 2.3rem;
    transform: translateY(4px) translateX(0px) rotate(45deg);
  }

  #burger_menu button span:after {
    width: 2.3rem;
    transform: translateY(-3px) translateX(0px) rotate(-45deg);
  }
  #resume {
    display: none;
  }
}
#mobile_menu {
  position: absolute;
  top: -50%;
  left: -50%;
  visibility: hidden;
  opacity: 0;
  transform: translate(-50%, -50%);
  transition: visibility 0s, opacity 0.5s linear;
  ul {
    list-style: none;
    li {
      font-size: 3rem;
      text-align: center;
      & + li {
        margin-top: 1.5rem;
      }
    }
  }
}

@media screen and (max-width: 748px) {
  header nav {
    margin-top: 0;
    ul {
      li:not(#logo, #burger_menu) {
        display: none;
      }
      #burger_menu {
        display: block;
      }
    }
  }
}
</style>