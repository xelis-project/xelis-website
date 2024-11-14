<template>
  <div>
    <nav class="scroll-bar-top">
      <ul>
        <li id="logo">
          <router-link :to="{name: 'home'}">
            <img src="@/assets/logo.svg" />
            <div>
              XELIS
            </div>
          </router-link>
        </li>
        <template v-if="$route.name === 'home'">
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
            <router-link :to="{name: 'home', hash: '#socials'}">
              Socials
            </router-link>
          </li>
          <li>/</li>
          <li>
            <router-link :to="{name: 'roadmap'}">
              Roadmap
            </router-link>
          </li>
          <li>
            <router-link
              :to="{name: 'resources'}"
            >
              Resources
            </router-link>
          </li>
        </template>
        <template v-if="$route.name === 'resources'">
          <li>
            <router-link :to="{name: 'resources', hash: '#wallets'}">
              Wallets
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources', hash: '#nodes'}">
              Nodes
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources', hash: '#exchanges'}">
              Exchanges
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources', hash: '#mining'}">
              Mining
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources', hash: '#links'}">
              Links
            </router-link>
          </li>
          <li>/</li>
          <li>
            <router-link :to="{name: 'home'}">
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'roadmap'}">
              Roadmap
            </router-link>
          </li>
        </template>
        <template v-if="$route.name === 'roadmap'">
          <li>
            <router-link :to="{name: 'roadmap', hash: '#tasks'}">
              Tasks
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'roadmap', hash: '#timeline'}">
              Timeline
            </router-link>
          </li>
          <li>/</li>
          <li>
            <router-link :to="{name: 'home'}">
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources'}">
              Resources
            </router-link>
          </li>
        </template>
        <template v-if="$route.name === 'not_found'">
          <li>
            <router-link :to="{name: 'home'}">
              Home
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'resources'}">
              Resources
            </router-link>
          </li>
        </template>
        <li>
          <a href="https://xeliscommunity.org/" target="_blank">
            Blog
          </a>
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
          <template v-if="$route.name === 'home'">
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
              <router-link :to="{name: 'home', hash: '#socials'}">
                Socials
              </router-link>
            </li>
            <li>-</li>
            <li>
              <router-link :to="{name: 'roadmap'}">
                Roadmap
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources'}">
                Resources
              </router-link>
            </li>
          </template>
          <template v-if="$route.name === 'resources'">
            <li>
              <router-link :to="{name: 'resources', hash: '#wallets'}">
                Wallets
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources', hash: '#nodes'}">
                Nodes
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources', hash: '#exchanges'}">
                Exchanges
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources', hash: '#mining'}">
                Mining
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources', hash: '#links'}">
                Links
              </router-link>
            </li>
            <li>-</li>
            <li>
              <router-link :to="{name: 'home'}">
                Home
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'roadmap'}">
                Roadmap
              </router-link>
            </li>
          </template>
          <template v-if="$route.name === 'roadmap'">
            <li>
              <router-link :to="{name: 'roadmap', hash: '#tasks'}">
                Tasks
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'roadmap', hash: '#timeline'}">
                Timeline
              </router-link>
            </li>
            <li>/</li>
            <li>
              <router-link :to="{name: 'home'}">
                Home
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources'}">
                Resources
              </router-link>
            </li>
          </template>
          <template v-if="$route.name === 'not_found'">
            <li>
              <router-link :to="{name: 'home'}">
                Home
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'resources'}">
                Resources
              </router-link>
            </li>
          </template>
          <li>
            <a href="https://xeliscommunity.org/" target="_blank">
              Blog
            </a>
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

      window.addEventListener("resize", () => {
        if (window.innerWidth > 748) {
          document.body.classList.remove("menu-open");
        }
      });
    }
}
</script>

<style lang="scss">
 // ============ MENU =======
header nav {
  overflow-x: auto;
}

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

  #mobile_menu {
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
  left: 50%;
  margin-top: 2rem;
  transform: translateX(-50%);
  visibility: hidden;
  opacity: 0;
  z-index: 1;
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